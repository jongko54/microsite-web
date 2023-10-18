package com.insrb.micro.api.domain.dto.response;


import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FindEmailResponseDto {

    private String userId;
    private String loginType;
    private String createdDate;


    public FindEmailResponseDto(User entity){
        this.userId = entity.getUserId();
        this.loginType = entity.getLoginType();
        this.createdDate = Utils.getYYYY_MM_DD(entity.getCreatedDate());
    }

}
