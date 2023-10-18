package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.admin.domain.entity.Policy;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PolicyResDto {

    private Long id;
    private String policy;
    private String createdBy;
    private String updatedBy;
    private char deleteYn;;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    public PolicyResDto(Policy entity){
        id          = entity.getId();
        policy      = entity.getPolicy();
        createdBy   = entity.getCreatedBy();
        updatedBy   = entity.getUpdatedBy();
        createdDate = entity.getCreatedDate();
        updatedDate = entity.getUpdatedDate();
        deleteYn    = entity.getDeleteYn();
    }


}
