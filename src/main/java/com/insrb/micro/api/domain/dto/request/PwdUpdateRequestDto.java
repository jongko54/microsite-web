package com.insrb.micro.api.domain.dto.request;

import lombok.Data;

@Data
public class PwdUpdateRequestDto {
    private String userPw;
    private String newUserPw;
    private String newUserPwCheck;
}
