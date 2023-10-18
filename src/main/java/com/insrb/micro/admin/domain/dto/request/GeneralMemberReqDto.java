package com.insrb.micro.admin.domain.dto.request;

import com.insrb.micro.admin.domain.entity.GeneralMember;
import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import groovy.transform.builder.Builder;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class GeneralMemberReqDto extends CommonEntity {

    private String userId;
    private String userPw;
    private String phoneRole;
    private String userName;
    private String loginType;
    private char deleteYn;


    @Builder
    public GeneralMember toEntity() {
        return GeneralMember.builder()
                .userId(userId)
                .userPw(userPw)
                .userName(userName)
                .phoneRole(phoneRole)
                .loginType(loginType)
                .deleteYn('N')
                .build();
    }
}
