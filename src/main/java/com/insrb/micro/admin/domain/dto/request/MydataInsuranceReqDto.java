package com.insrb.micro.admin.domain.dto.request;

import com.insrb.micro.admin.domain.entity.MydataInsurance;
import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import groovy.transform.builder.Builder;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MydataInsuranceReqDto extends CommonEntity {

  private String mydataInsuranceProduct;
  private String mydataInsuranceTitle;
  private String mydataInsuranceContent;
  private char deleteYn;

  @Builder
  public MydataInsurance toEntity() {
    return MydataInsurance.builder()
            .mydataInsuranceProduct(mydataInsuranceProduct)
            .mydataInsuranceTitle(mydataInsuranceTitle)
            .mydataInsuranceContent(mydataInsuranceContent)
            .deleteYn('N')
            .build();
  }

}
