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
@Table(name = "tb_insurance")
@Getter
@NoArgsConstructor
public class InsuranceApi extends CommonEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String userName;
  private String insuranceTitle;
  private String insuranceContent;
  @Column(name = "deleteYn")
  private char deleteYn;


  @Builder
  public InsuranceApi(long id, String userName, String insuranceTitle, String insuranceContent, char deleteYn) {
    this.userName = userName;
    this.insuranceTitle = insuranceTitle;
    this.insuranceContent = insuranceContent;
    this.deleteYn = deleteYn;
  }

  public void update(String insuranceTitle,String insuranceContent, char deleteYn) {
    this.insuranceTitle = insuranceTitle;
    this.insuranceContent = insuranceContent;
    this.deleteYn = deleteYn;
  }

}
