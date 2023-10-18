package com.insrb.micro.api.common;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class Utils {

    //전화번호 '-' 제거 함수
    public static String getStringToPhoneNumber(String src){
        return src.replaceAll("[^0-9]", "");
    }

    //날짜 yyyy-mm-dd 포맷
    public static String getYYYY_MM_DD(LocalDateTime createdDate){
        return DateTimeFormatter.ofPattern("yyyy-MM-dd").format(createdDate);
    }

    public static boolean getAuthTimeDiff(LocalDateTime send_time){
        LocalDateTime now_time = LocalDateTime.now();

        LocalDateTime startDateTime = LocalDateTime.of(send_time.getYear(),send_time.getMonth(), send_time.getDayOfMonth(),send_time.getHour(), send_time.getMinute(), send_time.getSecond());
        LocalDateTime endDateTime = LocalDateTime.of(now_time.getYear(),now_time.getMonth(), now_time.getDayOfMonth(),now_time.getHour(), now_time.getMinute(), now_time.getSecond());

        long diffTime = ChronoUnit.MINUTES.between(startDateTime, endDateTime);


        if(diffTime >= 3){
            return false;
        }else{
            return true;
        }

    }
}
