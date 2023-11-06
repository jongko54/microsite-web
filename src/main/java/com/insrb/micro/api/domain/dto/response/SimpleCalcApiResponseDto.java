package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import com.insrb.micro.api.domain.entity.SimpleCalc;
import lombok.Data;

@Data
public class SimpleCalcApiResponseDto {

  private Long id;
  private String userName;
  private String mydataInsuranceProduct;
  private String mydataInsuranceTitle;
  private String mydataInsuranceContent;
  private String createdDate;
  private char deleteYn;


  public SimpleCalcApiResponseDto(SimpleCalc entity) {
    this.id = entity.getId();
    this.deleteYn = entity.getDeleteYn();
    this.createdDate = Utils.getYYYY_MM_DD(entity.getCreatedDate());
  }

}
