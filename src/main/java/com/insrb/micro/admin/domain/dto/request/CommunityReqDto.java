package com.insrb.micro.admin.domain.dto.request;


import com.insrb.micro.admin.domain.entity.Community;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CommunityReqDto {


    private String category;
    private String code;
    private String title;
    private String content;
    private char deleteYn;


    public Community toEntity(){
        return Community.builder()
                .category(category)
                .code(code)
                .title(title)
                .content(content)
                .deleteYn('N')
                .build();
    }

}
