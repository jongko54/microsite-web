package com.insrb.micro.api.domain.dto.response;


import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.CommunityApi;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommApiResponseDto {

    private Long id;
    private String category;
    private String code;
    private String title;
    private String content;
    private String createdDate;


    public CommApiResponseDto(CommunityApi entity){
        this.id = entity.getId();
        this.category = entity.getCategory();
        this.code = entity.getCode();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.createdDate = Utils.getYYYY_MM_DD(entity.getCreatedDate());
    }
}
