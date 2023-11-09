package com.insrb.micro.api.domain.dto.request;

import com.insrb.micro.api.domain.entity.DomesticTourApi;
import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.util.Date;
import lombok.Data;
import lombok.RequiredArgsConstructor;

public class DomesticTourApiRequestDto {

  @Data
  @RequiredArgsConstructor
  public static class DomesticTourApiReq {
    private String id;
    private String userName;
    private String juminFront;
    private String juminBack;
    private String phoneNum;
    private String email;
    private String age;
    private String sex;
    private String period;
    private String gubun;
    private Date startDate;
    private Date endDate;
    private String diseasesThreeYearsAgreement;
    private String dangerLeisureSportsAgreement;
    private String foreignerYn;
    private String travelPurpose;
    private String privacyInfoAgreement;
    private String beforePayment;

    private String deleteYn;

    public DomesticTourApi toEntity() {
      return DomesticTourApi.builder()
          .userName(this.userName)
          .juminFront(this.juminFront)
          .juminBack(this.juminBack)
          .phoneNum(this.phoneNum)
          .email(this.email)
          .age(this.age)
          .sex(this.sex)
          .period(this.period)
          .gubun(this.gubun)
          .startDate(this.startDate)
          .endDate(this.endDate)
          .diseasesThreeYearsAgreement(this.diseasesThreeYearsAgreement)
          .dangerLeisureSportsAgreement(this.dangerLeisureSportsAgreement)
          .travelPurpose(this.travelPurpose)
          .privacyInfoAgreement(this.privacyInfoAgreement)
          .beforePayment(this.beforePayment)
          .foreignerYn(this.foreignerYn)
          .deleteYn('N')
          .build();
    }
  }
}
