package com.insrb.micro.admin.domain.dto.response;


import com.insrb.micro.admin.domain.entity.Manager;
import com.insrb.micro.admin.domain.enumrate.Role;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MemberResDto {

    private Long id;
    private String userId;
    private String phoneRole;
    private Role hasRole;
    private String createdBy;
    private String updatedBy;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private char deleteYn;;

    public MemberResDto(Manager entity){
        id = entity.getId();
        userId = entity.getUserId();
        phoneRole = entity.getPhoneRole();
        hasRole = entity.getHasRole();
        createdBy = entity.getCreatedBy();
        updatedBy = entity.getUpdatedBy();
        createdDate = entity.getCreatedDate();
        updatedDate = entity.getUpdatedDate();
        deleteYn = entity.getDeleteYn();
    }
}

