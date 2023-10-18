package com.insrb.micro.admin.domain.dto.request;

import com.insrb.micro.admin.domain.entity.InfoPlace;
import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import groovy.transform.builder.Builder;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InfoPlaceReqDto extends CommonEntity {

    private String policy;
    private String title;
    private String content;
    private char deleteYn;

    @Builder
    public InfoPlace toEntity() {
        return InfoPlace.builder()
                .title(title)
                .content(content)
                .deleteYn('N')
                .build();
    }
}
