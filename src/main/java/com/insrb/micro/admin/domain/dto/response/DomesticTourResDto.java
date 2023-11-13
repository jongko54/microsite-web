package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.api.domain.entity.DomesticTourApi;
import java.time.LocalDateTime;
import java.util.Date;
import lombok.Data;

@Data
public class DomesticTourResDto {

  private long id;
  private Long userId;
  private String userName;
  private String junminBack;
  private String juminFront;
  private String phoneNum;
  private String email;
  private String age;
  private String period;
  private char gubun;
  private Date startDate;
  private Date endDate;
  private String diseasesThreeYearsAgreement;
  private String dangerLeisureSportsAgreement;
  private String foreignerYn;
  private String travelPurpose;
  private String privacyInfoAgreement;
  private String beforePayment;
  private int fee;

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
    age            = entity.getAge();
    period            = entity.getPeriod();
    gubun            = entity.getGubun();
    startDate            = entity.getStartDate();
    endDate            = entity.getEndDate();
    diseasesThreeYearsAgreement = entity.getDiseasesThreeYearsAgreement();
    dangerLeisureSportsAgreement= entity.getDangerLeisureSportsAgreement();
    travelPurpose = entity.getTravelPurpose();
    privacyInfoAgreement = entity.getPrivacyInfoAgreement();
    foreignerYn = entity.getForeignerYn();
    travelPurpose = entity.getTravelPurpose();
    beforePayment = entity.getBeforePayment();
    fee = entity.getFee();
    createdBy = entity.getCreatedBy();
    updatedBy = entity.getUpdatedBy();
    createdDate = entity.getCreatedDate();
    updatedDate = entity.getUpdatedDate();
    deleteYn = entity.getDeleteYn();
  }

}
