package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.InfoPlace;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class InfoPlaceResDto {
    private long id;
    private String title;
    private String content;
    private String createdBy;
    private String updatedBy;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private char deleteYn;


    public InfoPlaceResDto(InfoPlace entity){
        id = entity.getId();
        title = entity.getTitle();
        content = entity.getContent();
        createdBy = entity.getCreatedBy();
        updatedBy = entity.getUpdatedBy();
        createdDate = entity.getCreatedDate();
        updatedDate = entity.getUpdatedDate();
        deleteYn = entity.getDeleteYn();
    }
}
