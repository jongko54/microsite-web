package com.insrb.micro.api.service;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.dto.request.SmsRequestDto;
import com.insrb.micro.api.domain.dto.response.SmsResponseDto;
import com.insrb.micro.api.domain.entity.Sms;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.SmsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.Random;

@Slf4j
@Service
@RequiredArgsConstructor
public class SmsService {


    private final DefaultMessageService messageService = NurigoApp.INSTANCE.initialize("NCSHNIIXFDEZO9JC", "60XSW8GRSQIYWJP4FE8AP1DJXF7F1BBI", "https://api.solapi.com");

    private final SmsRepository smsRepository;

    //보내는 번호
    private String send_from = "07041263333";

    /**
     * 메세지 보내는 함수
     * @param mobile (사용자 핸드폰 번호)
     * @return
     */
    public SmsResponseDto smsSend(String mobile) {
        Message message = new Message();

        //랜덤 5자리 번호 생성
        String key = createKey();

        String msgText = "["+ key + "] 인슈로보 인증번호입니다.";

        message.setFrom(send_from);
        message.setTo(mobile);
        message.setText(msgText);

        try{

            SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));
              SmsResponseDto responseDto = null;

            if(response.getStatusCode().equals("2000") || response.getStatusCode().equals("3000") || response.getStatusCode().equals("4000") ){
                 responseDto = saveSms(response, key);
            }
            return responseDto;
        }catch (RuntimeException e){
            throw new CustomException(ErrorCode.FAIL_SMS);
        }

    }

    /**
     * 보낸 메세지 저장 함수
     * @param response
     * @param key
     * @return
     */
    @Transactional
    public SmsResponseDto saveSms(SingleMessageSentResponse response, String key) {
        SmsRequestDto params = SmsRequestDto.builder()
                .groupId(response.getGroupId())
                .messageId(response.getMessageId())
                .accountId(response.getAccountId())
                .authKey(key)
                .authYn('N')
                .statusCode(response.getStatusCode())
                .statusMessage(response.getStatusMessage())
                .messageType(String.valueOf(response.getType()))
                .country(response.getCountry())
                .messageTo(response.getTo())
                .messageFrom(response.getFrom())
                .build();

        String resId = smsRepository.save(params.toEntity()).getMessageId();


        if(resId.equals(response.getMessageId())){

            SmsResponseDto responseDto = SmsResponseDto.builder()
                    .messageId(resId)
                    .messageTo(response.getTo())
                    .messageFrom(response.getFrom())
                    .build();
            log.info("메세지 저장 완료 : {}", resId);

            return responseDto;
        }else{
            throw new CustomException(ErrorCode.BAD_REQUEST);
        }
    }


    /**
     * 인증번호 확인
     * @param messageId 고유 메세지 id
     * @param authKey 사용자가 입력한 인증번호
     * @return
     */
    @Transactional
    public String smsCheck(String messageId, String authKey) {

        Optional<Sms> entity = smsRepository.findByMessageIdAndAuthKey(messageId, authKey);

        //인증번호가 불일치 할 경우
        if(entity.isEmpty()) {
            throw new CustomException(ErrorCode.FAIL_AUTH_MOBILE);
        }

        //인증번호 시간이 만료된 경우
        if(!Utils.getAuthTimeDiff(entity.get().getSendDate())){
            throw new CustomException(ErrorCode.FAIL_TIME_MOBILE);
        }

        entity.map(m-> m.update('Y'));

        return entity.get().getMessageTo();
    }


    /**
     * 5자리 랜덤 인증번호 생성
     * @return
     */
    public String createKey(){
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for(int i=0; i<5; i++){
            key.append((rnd.nextInt(10)));
        }

        return key.toString();
    }

}
