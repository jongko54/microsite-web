package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.config.security.oauth2.OAuthUserProfileDto;
import com.insrb.micro.api.domain.dto.request.UserJoinRequestDto;
import com.insrb.micro.api.domain.dto.response.FindEmailResponseDto;
import com.insrb.micro.api.domain.dto.response.TokenInfo;
import com.insrb.micro.api.domain.dto.request.UserLoginRequestDto;
import com.insrb.micro.api.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.KakaoOption;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 사용자 관련 요청을 처리하는 컨트롤러
 * @RestController로 처리
 */

@Api(tags = "user(사용자)")
@Slf4j
@RequestMapping("/api/public")
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

//    @Value("${insurobo.url}")
//    private String url;

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


    /**
     * 사용자 로그인 api
     * @param params (이메일, 비밀번호)
     * @return jwt토큰, 사용자 이름
     */
    @ApiOperation(value = "사용자 로그인")
    @PostMapping(path = "/login")
    public ApiResponse login(@RequestBody UserLoginRequestDto params){

        TokenInfo tokenInfo = userService.login(params.getUserId(), params.getUserPw());


        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_LOGIN, tokenInfo);
    }

    /**
     * 회원가입 api
     * @param params (이메일, 비밀번호, 이름, 전화번호)
     * @return 이메일
     */
    @ApiOperation(
            value = "사용자 회원가입"
                    )
    @PostMapping(path = "/join")
    public ApiResponse signup(@RequestBody UserJoinRequestDto params){

        String createdUserId = userService.join(params);
        System.out.println(params);

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_JOIN, createdUserId);
    }

    /**
     * 이메일 중복확인 api
     * @param email (이메일)
     * @return true or false
     */
    @ApiOperation(
            value = "이메일 중복확인",
            notes = "true면 중복되는 이메일 없음 false면 중복되는 이메일"
    )
    @GetMapping(path = "/email")
    public ApiResponse emailCheck(@RequestParam String email){
        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_CHECK ,userService.emailCheck(email));
    }

    @ApiOperation(value = "사용자 아이디 찾기")
    @GetMapping(path = "/findEmail")
    public ApiResponse findEmail(@RequestParam String mobile, String messageId){

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, userService.findEmail(mobile, messageId));
    }


    @ApiOperation(value = "api 요청 테스트")
    @GetMapping(path = "/test")
    public ApiResponse test(HttpServletRequest request, HttpServletResponse response) throws IOException {

//        String test = userService.test("테스트2");

        System.out.println("testetetet");

//        String url = UriComponentsBuilder.fromUriString("http://localhost:3000/login")
//
//                .build().toUriString();

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, "성공");

//        response.sendRedirect(url);
    }


    @PostMapping(path = "/kakaoAPI")
    public String kakaoAPI(@RequestBody UserJoinRequestDto params) throws Exception {

        // solapi api키, api암호키로 초기화
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
            message.setTo(params.getPhoneRole()); // 수신번호
            //message.setTo(params[i].get("name").toString()); // 이름
            message.setKakaoOptions(kakaoOption);

            // 알림톡 템플릿 데이터 세팅
            Map<String, String> variables = new HashMap<>();
            variables.put("#{홍길동}", params.getUserName());

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
