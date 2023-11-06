package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.api.domain.entity.DomesticTourApi;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class DomesticTourResDto {

  private long id;
  private String userName;
  private String junminBack;
  private String juminFront;
  private String phoneNum;
  private String email;
  private String diseasesThreeYearsAgreement;
  private String dangerLeisureSportsAgreement;
  private String travelPurpose;
  private String privacyInfoAgreement;

  private char deleteYn;
  private String createdBy;
  private String updatedBy;
  private LocalDateTime createdDate;
  private LocalDateTime updatedDate;

  public DomesticTourResDto(DomesticTourApi entity){
    id               = entity.getId();
    userName         = entity.getUserName();
    junminBack       = entity.getJuminBack();
    juminFront       = entity.getJuminFront();
    phoneNum         = entity.getPhoneNum();
    email            = entity.getEmail();
    diseasesThreeYearsAgreement = entity.getDiseasesThreeYearsAgreement();
    dangerLeisureSportsAgreement= entity.getDangerLeisureSportsAgreement();
    travelPurpose = entity.getTravelPurpose();
    privacyInfoAgreement = entity.getPrivacyInfoAgreement();

    createdBy = entity.getCreatedBy();
    updatedBy = entity.getUpdatedBy();
    createdDate = entity.getCreatedDate();
    updatedDate = entity.getUpdatedDate();
    deleteYn = entity.getDeleteYn();
  }

}
