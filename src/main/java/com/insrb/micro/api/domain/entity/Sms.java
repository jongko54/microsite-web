package com.insrb.micro.api.domain.entity;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Table(name = "tb_sms")
@Entity
public class Sms {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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
    private LocalDateTime sendDate = LocalDateTime.now();


    @Builder
    public Sms(String groupId, String messageId, String accountId, String authKey, char authYn, String statusCode, String statusMessage, String messageType, String country, String messageTo, String messageFrom) {
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


    public Sms update(char authYn) {
        this.authYn = authYn;
        return this;
    }
}
