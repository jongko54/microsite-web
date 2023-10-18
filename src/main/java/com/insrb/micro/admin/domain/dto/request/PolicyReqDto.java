package com.insrb.micro.admin.domain.dto.request;

import com.insrb.micro.admin.domain.entity.Notice;
import com.insrb.micro.admin.domain.entity.Policy;
import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import groovy.transform.builder.Builder;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PolicyReqDto extends CommonEntity {

    private String policy;
    private String title;
    private char deleteYn;

    @Builder
    public Policy toEntity() {
        return Policy.builder()
                .policy(policy)
                .deleteYn('N')
                .build();
    }


}
