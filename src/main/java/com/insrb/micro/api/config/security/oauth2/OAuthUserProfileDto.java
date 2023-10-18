package com.insrb.micro.api.config.security.oauth2;


import com.insrb.micro.api.domain.entity.User;
import lombok.Data;


/**
 * 소셜 로그인(카카오, 네이버) 사용자 정보를
 * 공통된 객체로 만들기 위해 사용
 */
@Data
public class OAuthUserProfileDto {
    private String name;
    private String email;
    private String phone;
    private String provider;


    public User toEntity(){
        return User.builder()
                .userId(email)
                .userName(name)
                .loginType(provider)
                .phoneRole(phone)
                .deleteYn('N')
                .build();
    }
}
