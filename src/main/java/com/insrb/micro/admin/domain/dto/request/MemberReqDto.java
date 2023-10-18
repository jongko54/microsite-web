package com.insrb.micro.admin.domain.dto.request;

import com.insrb.micro.admin.domain.entity.Manager;
import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import groovy.transform.builder.Builder;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberReqDto extends CommonEntity {


    private String userId;
    private String userPw;
    private String phoneRole;
    private char deleteYn;


    @Builder
    public Manager toEntity(){
        return Manager.builder()
                .userId(userId)
                .userPw(userPw)
                .phoneRole(phoneRole)
                .deleteYn('N')
                .build();
    }

}
