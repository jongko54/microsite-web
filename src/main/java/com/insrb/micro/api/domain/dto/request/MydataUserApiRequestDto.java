package com.insrb.micro.api.domain.dto.request;

import com.insrb.micro.admin.domain.entity.MydataUser;
import lombok.Data;
import lombok.RequiredArgsConstructor;

public class MydataUserApiRequestDto {

  @Data
  @RequiredArgsConstructor
  public static class MydataUserApiReq{
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
    



    public MydataUser toEntity(){
      return MydataUser.builder()
          .userName(this.userName)
          .userEmail(this.userEmail)
          .phoneAgency(this.phoneAgency)
          .phoneRole(this.phoneRole)
          .residentNumberFront(this.residentNumberFront)
          .residentNumberBack(this.residentNumberBack)
          .companyName(this.companyName)
          .housingType(this.housingType)
          .housingDivision(this.housingDivision)
          .businessIncome(this.businessIncome)
          .carOwner(this.carOwner)
          .carName(this.carName)
          .motorcycle(this.motorcycle)
          .height(this.height)
          .weight(this.weight)
          .disease(this.disease)
          .diseaseName(this.diseaseName)
          .bloodType(this.bloodType)
          .physicalDisability(this.physicalDisability)
          .physicalDisabilityLevel(this.physicalDisabilityLevel)
          .marriage(this.marriage)
          .children(this.children)
          .preschoolChild(this.preschoolChild)
          .elderlyFamily(this.elderlyFamily)
          .privacyAgreement(this.privacyAgreement)
          .marketingAgreement(this.marketingAgreement)
          .thirdPartiesAgreement(this.thirdPartiesAgreement)

          .deleteYn('N')
          .build();
    }
  }

}
