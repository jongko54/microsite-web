package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.InfoPlaceApi;
import lombok.Data;

@Data
public class InfoPlaceApiResponseDto {

    private Long id;
    private String title;
    private String content;
    private String createdDate;

    private char deleteYn;


    public InfoPlaceApiResponseDto(InfoPlaceApi entity){
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.deleteYn = entity.getDeleteYn();
        this.createdDate = Utils.getYYYY_MM_DD(entity.getCreatedDate());
    }


}
