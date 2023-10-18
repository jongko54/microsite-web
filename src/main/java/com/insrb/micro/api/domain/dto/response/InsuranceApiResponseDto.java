package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.InsuranceApi;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class InsuranceApiResponseDto {

  private Long id;
  private String user_name;
  private String insurance_title;
  private String insurance_content;
  private String createdDate;
  private char deleteYn;


  public InsuranceApiResponseDto(InsuranceApi entity) {
    this.id = entity.getId();
    this.user_name = entity.getUserName();
    this.insurance_title = entity.getInsuranceTitle();
    this.insurance_content = entity.getInsuranceContent();
    this.deleteYn = entity.getDeleteYn();
    this.createdDate = Utils.getYYYY_MM_DD(entity.getCreatedDate());
  }
}
