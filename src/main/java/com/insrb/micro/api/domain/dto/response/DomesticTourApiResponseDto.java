package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.DomesticTourApi;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import lombok.Data;

@Data
public class DomesticTourApiResponseDto {

  private Long id;
  private String userName;
  private String createdDate;
  private char deleteYn;


  public DomesticTourApiResponseDto(DomesticTourApi entity) {
    this.id = entity.getId();
    this.deleteYn = entity.getDeleteYn();
    this.createdDate = Utils.getYYYY_MM_DD(entity.getCreatedDate());
  }

}
