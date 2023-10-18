package com.insrb.micro.api.service;


import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.config.security.oauth2.OAuthUserProfileDto;
import com.insrb.micro.api.domain.dto.request.UserJoinRequestDto;
import com.insrb.micro.api.domain.dto.response.AgreementResponseDto;
import com.insrb.micro.api.domain.dto.response.FindEmailResponseDto;
import com.insrb.micro.api.domain.dto.response.TokenInfo;
import com.insrb.micro.api.config.security.jwt.TokenProvider;
import com.insrb.micro.api.domain.entity.Sms;
import com.insrb.micro.api.domain.entity.User;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.SmsRepository;
import com.insrb.micro.api.repository.UserRepository;
import io.jsonwebtoken.Claims;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.KakaoOption;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.KakaoOption;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {


    private final UserRepository userRepository;
    private final SmsRepository smsRepository;
    private final TokenProvider tokenProvider;
    private final PasswordEncoder passwordEncoder;

    @Value("NCSHNIIXFDEZO9JC")
    private String kakaoApiKey;

    @Value("60XSW8GRSQIYWJP4FE8AP1DJXF7F1BBI")
    private String kakaoApiSecretKey;

    @Value("KA01PF221108054214098cQhJt8K7kok")
    private String kakaoApiPfId;

    @Value("KA01TP230626025525395dJWykpdeolN")
    private String kakaoApiTempleteId;

    @Value("07041263333")
    private String kakaoApiSendTelNum;


    @Transactional
    public TokenInfo login(String userId, String userPw){

        String loginType = "insurobo";
        //아이디 존재 여부
        User user = userRepository.findByUserIdAndLoginType(userId, loginType).orElseThrow(()-> new CustomException(ErrorCode.USER_NOT_FOUND));

        //암호화된 비밀번호 비교
        if(!passwordEncoder.matches(userPw, user.getUserPw())){
            throw new CustomException(ErrorCode.PASSWORD_NOT_EQUALS);
        }

//        Authentication authentication = new UserAuthentication(userId, null, null);

        //로그인된 사용자 정보로 토큰 생성
        TokenInfo tokenInfo = tokenProvider.generateToken(userId, user.getId());

        Claims claims = tokenProvider.parseClaims(tokenInfo.getAccessToken());

        tokenInfo.setUserName(user.getUserName());

        return tokenInfo;
    }

    @Transactional
    public String join(UserJoinRequestDto params) {

        //비밀번호 암호화
        params.setUserPw(passwordEncoder.encode(params.getUserPw()));

        User user = userRepository.save(params.toEntity());


        if(user.getUserId().isEmpty() || user.getUserId() == null){
            throw new CustomException(ErrorCode.FAIL_JOIN);
        }

        return user.getUserId();
    }


    @Transactional
    public boolean emailCheck(String email) {
        Optional<User> entity = userRepository.findByUserId(email);

        boolean emailChk = true;

        if(!entity.isEmpty()){
            System.out.println("유저 있음");
            //값이 있으면 이미 사용중인 이메일이므로 예외처리 해준다
            throw new CustomException(ErrorCode.FAIL_EMAIL_DUP);
        }

        return emailChk;
    }

    @Transactional
    public List<FindEmailResponseDto> findEmail(String mobile, String messageId) {

        Sms smsYn = smsRepository.findByMessageId(messageId).orElseThrow(()-> new CustomException(ErrorCode.FAIL_SMS));

        //인증이 완료되지 않았을때 예외발생
        if(smsYn.getAuthYn() != 'Y'){
            throw new CustomException(ErrorCode.FAIL_SMS);
        }

        //인증번호 시간이 만료되었을때 예외발생
        if(!Utils.getAuthTimeDiff(smsYn.getSendDate())){
            throw new CustomException(ErrorCode.FAIL_TIME_MOBILE);
        }

        List<User> entity = userRepository.findAllByPhoneRoleAndDeleteYn(mobile, 'N');

        //계정이 존재하지 않을경우 예외발생
        if(entity.isEmpty()){
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }

        return entity.stream().map(FindEmailResponseDto::new).collect(Collectors.toList());
    }

    public String test(String name) {

        if(!name.equals("테스트")){
            throw new CustomException(ErrorCode.BAD_REQUEST);
        }else{
            return "일치";
        }
    }

    @PostMapping(path = "/kakaoAPI")
    public String kakaoAPI(String params, String phone) {

        DefaultMessageService messageService = NurigoApp.INSTANCE.initialize(kakaoApiKey, kakaoApiSecretKey, "https://api.solapi.com");

        // 카카오 알림톡 설정
        // 카카오톡 채널 프로필 번호, 템플릿번호 세팅
        KakaoOption kakaoOption = new KakaoOption();
        kakaoOption.setPfId(kakaoApiPfId); // 카카오톡 pfId - https://console.solapi.com/kakao/plus-friends
        kakaoOption.setTemplateId(kakaoApiTempleteId); // 카카오톡 템플릿ID - https://console.solapi.com/kakao/templates
        // disableSms를 true로 설정하실 경우 문자로 대체발송 되지 않습니다.
        kakaoOption.setDisableSms(true); // SMS대체발송 여부 (true - 보내지않기, false - 보내기)

        // 스레드 실행 시 알림톡 결과 코드를 받아올 리스트
        List<String> statusCodeList = new ArrayList<>();
        List<Thread> threadList = new ArrayList<>();

        // Message 패키지가 중복될 경우 net.nurigo.sdk.message.model.Message로 치환하여 주세요
        System.out.println(params);
        Message message = new Message();
        message.setFrom(kakaoApiSendTelNum);
        message.setTo(phone);//가입폰번호
        message.setKakaoOptions(kakaoOption);

        // 알림톡 템플릿 데이터 세팅
        Map<String, String> variables = new HashMap<>();

        kakaoOption.setVariables(variables);
        message.setKakaoOptions(kakaoOption);


        try {
            // send 메소드로 ArrayList<Message> 객체를 넣어도 동작합니다!
            messageService.send(message);
        } catch (NurigoMessageNotReceivedException exception) {
            // 발송에 실패한 메시지 목록을 확인할 수 있습니다!
            System.out.println(exception.getFailedMessageList());
            System.out.println(exception.getMessage());
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
        }
        return "success";
    }

}
