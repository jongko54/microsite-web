package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.admin.domain.entity.Notice;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class NoticeResDto {

    private Long id;
    private String policy;
    private String title;
    private String content;
    private String createdBy;
    private String updatedBy;
    private char deleteYn;;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;


    public NoticeResDto(Notice entity){
        id          = entity.getId();
        policy      = entity.getPolicy();
        title       = entity.getTitle();
        content     = entity.getContent();
        createdBy   = entity.getCreatedBy();
        updatedBy   = entity.getUpdatedBy();
        createdDate = entity.getCreatedDate();
        updatedDate = entity.getUpdatedDate();
        deleteYn    = entity.getDeleteYn();
    }
}
