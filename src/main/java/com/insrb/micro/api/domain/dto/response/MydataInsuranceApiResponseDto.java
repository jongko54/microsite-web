package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import lombok.Data;

@Data
public class MydataInsuranceApiResponseDto {

  private Long id;
  private String userName;
  private String mydataInsuranceProduct;
  private String mydataInsuranceTitle;
  private String mydataInsuranceContent;
  private String createdDate;
  private char deleteYn;


  public MydataInsuranceApiResponseDto(MydataInsuranceApi entity) {
    this.id = entity.getId();
    this.userName = entity.getUserName();
    this.mydataInsuranceProduct = entity.getMydataInsuranceProduct();
    this.mydataInsuranceTitle = entity.getMydataInsuranceTitle();
    this.mydataInsuranceContent = entity.getMydataInsuranceContent();
    this.deleteYn = entity.getDeleteYn();
    this.createdDate = Utils.getYYYY_MM_DD(entity.getCreatedDate());
  }
}
