package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.admin.domain.entity.MydataUser;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class MydataUserResDto {

  private long id;
  private String userName;
  private String userEmail;
  private String phoneAgency;
  private String phoneRole;
  private String residentNumberFront;
  private String residentNumberBack;
  private String companyName;
  private String housingType;
  private String housingDivision;
  private String businessIncome;
  private String carOwner;
  private String carName;
  private String motorcycle;
  private String height;
  private String weight;
  private String disease;
  private String diseaseName;
  private String bloodType;
  private String physicalDisability;
  private String physicalDisabilityLevel;
  private String marriage;
  private String children;
  private String preschoolChild;
  private String elderlyFamily;
  private String privacyAgreement;
  private String marketingAgreement;
  private String thirdPartiesAgreement;

  private String createdBy;
  private String updatedBy;
  private LocalDateTime createdDate;
  private LocalDateTime updatedDate;
  private char deleteYn;

  public MydataUserResDto(MydataUser entity){
    id                  = entity.getId();
    userName            = entity.getUserName();
    userEmail           = entity.getUserEmail();
    phoneAgency         = entity.getPhoneAgency();
    phoneRole           = entity.getPhoneRole();
    residentNumberFront = entity.getResidentNumberFront();
    residentNumberBack  = entity.getResidentNumberBack();
    companyName         = entity.getCompanyName();
    housingType         = entity.getHousingType();
    housingDivision     = entity.getHousingDivision();
    businessIncome      = entity.getBusinessIncome();
    carOwner            = entity.getCarOwner();
    carName             = entity.getCarName();
    motorcycle          = entity.getMotorcycle();
    height              = entity.getHeight();
    weight              = entity.getWeight();
    disease             = entity.getDisease();
    diseaseName         = entity.getDiseaseName();
    bloodType           = entity.getBloodType();
    physicalDisability  = entity.getPhysicalDisability();
    physicalDisabilityLevel = entity.getPhysicalDisabilityLevel();
    marriage            = entity.getMarriage();
    children            = entity.getChildren();
    preschoolChild      = entity.getPreschoolChild();
    elderlyFamily       = entity.getElderlyFamily();
    privacyAgreement    = entity.getPrivacyAgreement();
    marketingAgreement  = entity.getMarketingAgreement();
    thirdPartiesAgreement = entity.getThirdPartiesAgreement();


    createdBy = entity.getCreatedBy();
    updatedBy = entity.getUpdatedBy();
    createdDate = entity.getCreatedDate();
    updatedDate = entity.getUpdatedDate();
    deleteYn = entity.getDeleteYn();
  }
}
