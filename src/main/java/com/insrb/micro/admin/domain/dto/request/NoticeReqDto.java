package com.insrb.micro.admin.domain.dto.request;

import com.insrb.micro.admin.domain.entity.GeneralMember;
import com.insrb.micro.admin.domain.entity.Notice;
import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import groovy.transform.builder.Builder;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class NoticeReqDto extends CommonEntity {

    private String policy;
    private String title;
    private String content;
    private char deleteYn;

    @Builder
    public Notice toEntity() {
        return Notice.builder()
                .policy(policy)
                .title(title)
                .content(content)
                .deleteYn('N')
                .build();
    }
}
