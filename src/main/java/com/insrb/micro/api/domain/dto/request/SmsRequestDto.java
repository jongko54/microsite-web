package com.insrb.micro.api.domain.dto.request;


import com.insrb.micro.api.domain.entity.Sms;
import lombok.Builder;
import lombok.Data;

@Data
public class SmsRequestDto {
    private String groupId;
    private String messageId;
    private String accountId;
    private String authKey;
    private char authYn;
    private String statusCode;
    private String statusMessage;
    private String messageType;
    private String country;
    private String messageTo;
    private String messageFrom;


    public Sms toEntity(){
        return Sms.builder()
                .groupId(groupId)
                .messageId(messageId)
                .accountId(accountId)
                .authKey(authKey)
                .authYn(authYn)
                .statusCode(statusCode)
                .statusMessage(statusMessage)
                .messageType(messageType)
                .country(country)
                .messageTo(messageTo)
                .messageFrom(messageFrom)
                .build();
    }

    @Builder
    public SmsRequestDto(String groupId, String messageId, String accountId, String authKey, char authYn, String statusCode, String statusMessage, String messageType, String country, String messageTo, String messageFrom) {
        this.groupId = groupId;
        this.messageId = messageId;
        this.accountId = accountId;
        this.authKey = authKey;
        this.authYn = authYn;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.messageType = messageType;
        this.country = country;
        this.messageTo = messageTo;
        this.messageFrom = messageFrom;
    }
}
