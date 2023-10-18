package com.insrb.micro.api.domain.dto.request;

import com.insrb.micro.api.domain.entity.User;
import io.swagger.annotations.ApiModel;
import lombok.*;

@ApiModel(value = "UserJoinRequestDto <회원가입 요청 파라미터>")
@Getter
@Setter
@NoArgsConstructor
public class UserJoinRequestDto {

    private String userId;
    private String userPw;
    private String userName;
    private String phoneRole;
    private String marketing_yn;

    public User toEntity(){
        return User.builder()
                .userId(userId)
                .userPw(userPw)
                .userName(userName)
                .phoneRole(phoneRole)
                .loginType("insurobo")
                .marketing_yn(marketing_yn)
                .deleteYn('N')
                .build();
    }


}
