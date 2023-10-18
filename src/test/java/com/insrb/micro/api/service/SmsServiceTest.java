package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.entity.Sms;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.SmsRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Optional;
import java.util.Random;


@SpringBootTest
class SmsServiceTest {

    @Autowired
    SmsRepository smsRepository;

    @Test
    @DisplayName("랜덤값 테스트")
    void rnd(){
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for(int i=0; i<5; i++){
            key.append((rnd.nextInt(10)));
        }

        String msg = "["+key.toString() + "] 인슈로보 인증번호입니다.";


        System.out.println(msg);

    }

    @Test
    @DisplayName("인증번호값 비교")
    void auth_key(){
        String messageId = "M4V20230331103155X0B8KML6A34PIYM";
        String authKey = "82618";

//        Sms entity = smsRepository.findByMessageIdAndAuthKey(messageId, authKey).orElseThrow(()-> new CustomException(ErrorCode.FAIL_AUTH_MOBILE));

        Optional<Sms> entity = smsRepository.findByMessageIdAndAuthKey(messageId, authKey);

        if(entity.isEmpty()){
            throw new CustomException(ErrorCode.FAIL_AUTH_MOBILE);
        }

//        if()

        LocalDateTime test1 = entity.get().getSendDate();
        LocalDateTime test2 = LocalDateTime.now();

        LocalDateTime startDateTime = LocalDateTime.of(test1.getYear(),test1.getMonth(), test1.getDayOfMonth(),test1.getHour(), test1.getMinute(), test1.getSecond());
        LocalDateTime endDateTime = LocalDateTime.of(test2.getYear(),test2.getMonth(), test2.getDayOfMonth(),test2.getHour(), test2.getMinute(), test2.getSecond());

        long diffTime = ChronoUnit.MINUTES.between(startDateTime, endDateTime);



//      System.out.println(entity.getMessageTo());
    }
}
