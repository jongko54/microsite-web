package com.insrb.micro.api.domain.dto.request;


import com.insrb.micro.api.domain.entity.Consulting;
import lombok.Data;

import static com.insrb.micro.api.common.Utils.getStringToPhoneNumber;

@Data
public class ConsultingRequestDto {
    private String name;
    private String phoneRole;
    private String business;


    public Consulting toEntity(){
          return Consulting.builder()
                  .name(name)
                  .phoneRole(getStringToPhoneNumber(phoneRole))
                  .business(business)
                  .consultingYn('N')
                  .deleteYn('N')
                  .build();
    }
}
