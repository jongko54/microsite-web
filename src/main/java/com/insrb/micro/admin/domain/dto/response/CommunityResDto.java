package com.insrb.micro.admin.domain.dto.response;


import com.insrb.micro.admin.domain.entity.Community;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommunityResDto {

    private long id;
    private String category;
    private String code;
    private String title;
    private String content;
    private String createdBy;
    private String updatedBy;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private char deleteYn;


    public CommunityResDto(Community entity){
        id = entity.getId();
        category = entity.getCategory();
        code = entity.getCode();
        title = entity.getTitle();
        content = entity.getContent();
        createdBy = entity.getCreatedBy();
        updatedBy = entity.getUpdatedBy();
        createdDate = entity.getCreatedDate();
        updatedDate = entity.getUpdatedDate();
        deleteYn = entity.getDeleteYn();
    }
}
