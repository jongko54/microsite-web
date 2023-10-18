package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.admin.domain.entity.GeneralMember;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class GeneralMemberResDto {

    private Long id;
    private String userId;
    private String userPw;
    private String userName;
    private String phoneRole;
    private String address;
    private String address_detail;
    private String loginType;
    private String createdBy;
    private String updatedBy;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private char deleteYn;;

    public GeneralMemberResDto(GeneralMember entity){
        id          = entity.getId();
        userId      = entity.getUserId();
        userPw      = entity.getUserPw();
        userName    = entity.getUserName();
        phoneRole   = entity.getPhoneRole();
        address     = entity.getAddress();
        address_detail  = entity.getAddress_detail();
        loginType   = entity.getLoginType();
        createdBy   = entity.getCreatedBy();
        updatedBy   = entity.getUpdatedBy();
        createdDate = entity.getCreatedDate();
        updatedDate = entity.getUpdatedDate();
        deleteYn    = entity.getDeleteYn();
    }

}
