package com.insrb.micro.api.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * 보험 목록 테이블 엔티티
 */

@Entity
@Table(name = "tb_mydata_insurance")
@Getter
@NoArgsConstructor
public class MydataInsuranceApi extends CommonEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String userName;
  private String mydataInsuranceProduct;
  private String mydataInsuranceTitle;
  private String mydataInsuranceContent;
  private String keyword;
  @Column(name = "deleteYn")
  private char deleteYn;


  @Builder
  public MydataInsuranceApi(long id, String userName,String mydataInsuranceProduct, String mydataInsuranceTitle, String mydataInsuranceContent,String keyword, char deleteYn) {
    this.userName = userName;
    this.mydataInsuranceProduct = mydataInsuranceProduct;
    this.mydataInsuranceTitle   = mydataInsuranceTitle;
    this.mydataInsuranceContent = mydataInsuranceContent;
    this.keyword = keyword;
    this.deleteYn = deleteYn;
  }

  public void update(String mydataInsuranceProduct ,String mydataInsuranceTitle,String mydataInsuranceContent,String keyword, char deleteYn) {
    this.mydataInsuranceProduct = mydataInsuranceProduct;
    this.mydataInsuranceTitle   = mydataInsuranceTitle;
    this.mydataInsuranceContent = mydataInsuranceContent;
    this.keyword = keyword;
    this.deleteYn = deleteYn;
  }

}
