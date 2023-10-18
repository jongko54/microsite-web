package com.insrb.micro.api.domain.dto.response;


import com.insrb.micro.api.domain.entity.User;
import lombok.Data;

@Data
public class UserResponseDto {


    private Long id;
    private String userId;
    private String userName;
    private String phoneRole;
    private String loginType;
    private char deleteYn;


    public UserResponseDto(User user){
        this.id = user.getId();
        this.userId = user.getUserId();
        this.userName = user.getUserName();
        this.phoneRole = user.getPhoneRole();
        this.loginType = user.getLoginType();
        this.deleteYn = user.getDeleteYn();
    }
}
