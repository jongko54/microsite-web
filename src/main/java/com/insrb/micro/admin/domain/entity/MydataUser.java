package com.insrb.micro.admin.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)  //파라미터 없는 생성자 생성 어노테이션
@Table(name = "tb_mydata_user")
@Entity
public class MydataUser extends CommonEntity {

  @Id //primary key 컬럼에 붙여주는 어노테이션 필수
  @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment 를 사용하기 위한 어노테이션
  private Long id;
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



  private char deleteYn;

  @Builder
  public MydataUser(int id, char deleteYn,String userName, String userEmail,String phoneAgency,String phoneRole,
      String residentNumberFront,String residentNumberBack,String businessIncome,
      String companyName,String housingType ,String housingDivision,
      String carOwner,String carName,String motorcycle,String weight, String height, String disease,String diseaseName,String bloodType,
      String physicalDisability, String physicalDisabilityLevel,String marriage, String children, String preschoolChild,
      String elderlyFamily
  ){
    this.id                  = (long) id;
    this.userName            = userName;
    this.userEmail           = userEmail;
    this.phoneAgency         = phoneAgency;
    this.phoneRole           = phoneRole;
    this.residentNumberFront = residentNumberFront;
    this.residentNumberBack  = residentNumberBack;
    this.companyName         = companyName;
    this.housingType         = housingType;
    this.housingDivision     = housingDivision;
    this.businessIncome      = businessIncome;
    this.carOwner            = carOwner;
    this.carName             = carName;
    this.motorcycle          = motorcycle;
    this.height              = height;
    this.weight              = weight;
    this.disease             = disease;
    this.diseaseName         = diseaseName;
    this.bloodType           = bloodType;
    this.physicalDisability  = physicalDisability;
    this.physicalDisabilityLevel = physicalDisabilityLevel;
    this.marriage            = marriage;
    this.children            = children;
    this.preschoolChild      = preschoolChild;
    this.elderlyFamily       = elderlyFamily;
    this.deleteYn            = deleteYn;
  }

}
