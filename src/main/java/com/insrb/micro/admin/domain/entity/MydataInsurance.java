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
@Table(name = "tb_mydata_insurance")
@Entity
public class MydataInsurance extends CommonEntity {

  @Id //primary key 컬럼에 붙여주는 어노테이션 필수
  @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment 를 사용하기 위한 어노테이션
  private Long id;
  private String mydataInsuranceProduct;
  private String mydataInsuranceTitle;
  private String mydataInsuranceContent;
  private String keyword;
  private char deleteYn;

  @Builder
  public MydataInsurance(int id, char deleteYn,String mydataInsuranceTitle,String mydataInsuranceContent ,String mydataInsuranceProduct, String keyword){
    this.id                      = (long) id;
    this.mydataInsuranceProduct  = mydataInsuranceProduct;
    this.mydataInsuranceTitle    = mydataInsuranceTitle;
    this.mydataInsuranceContent  = mydataInsuranceContent;
    this.keyword                 = keyword;
    this.deleteYn                = deleteYn;
  }

  public void update(String mydataInsuranceProduct,String mydataInsuranceTitle,String mydataInsuranceContent,String keyword, char deleteYn ){
    this.mydataInsuranceProduct  = mydataInsuranceProduct;
    this.mydataInsuranceTitle    = mydataInsuranceTitle;
    this.mydataInsuranceContent  = mydataInsuranceContent;
    this.keyword                 = keyword;
    this.deleteYn                = deleteYn;
  }

}
