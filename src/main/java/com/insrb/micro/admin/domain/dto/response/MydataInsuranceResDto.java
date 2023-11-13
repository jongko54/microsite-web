package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.admin.domain.entity.MydataInsurance;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class MydataInsuranceResDto {
  private long id;
  private String userName;
  private String mydataInsuranceProduct;
  private String mydataInsuranceTitle;
  private String mydataInsuranceContent;
  private String keyword;
  private String createdBy;
  private String updatedBy;
  private LocalDateTime createdDate;
  private LocalDateTime updatedDate;
  private char deleteYn;

  public MydataInsuranceResDto(MydataInsurance entity){
    id                = entity.getId();
//    userName          = entity.getUserName();
    mydataInsuranceProduct  = entity.getMydataInsuranceProduct();
    mydataInsuranceTitle    = entity.getMydataInsuranceTitle();
    mydataInsuranceContent  = entity.getMydataInsuranceContent();
    keyword                 = entity.getKeyword();
    createdBy         = entity.getCreatedBy();
    updatedBy         = entity.getUpdatedBy();
    createdDate       = entity.getCreatedDate();
    updatedDate       = entity.getUpdatedDate();
    deleteYn          = entity.getDeleteYn();
  }

}
