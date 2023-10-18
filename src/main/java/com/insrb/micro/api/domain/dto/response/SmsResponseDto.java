package com.insrb.micro.api.domain.dto.response;


import com.insrb.micro.api.domain.entity.Sms;
import lombok.Builder;
import lombok.Data;

@Data
public class SmsResponseDto {

    private String messageId;
    private String messageTo;
    private String messageFrom;

    public SmsResponseDto(Sms entity){
        this.messageId = entity.getMessageId();
        this.messageTo = entity.getMessageTo();
        this.messageFrom = entity.getMessageFrom();
    }

    @Builder
    public SmsResponseDto(String messageId, String messageTo, String messageFrom){
        this.messageId = messageId;
        this.messageTo = messageTo;
        this.messageFrom = messageFrom;
    }
}
