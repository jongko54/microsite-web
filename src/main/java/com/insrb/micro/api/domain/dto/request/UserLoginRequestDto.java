package com.insrb.micro.api.domain.dto.request;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@ApiModel(value = "UserLoginRequestDto <로그인 요청 파라미터>")
@Data
public class UserLoginRequestDto {
    private String userId;   //아이디
    private String userPw;    //패스워드
}
