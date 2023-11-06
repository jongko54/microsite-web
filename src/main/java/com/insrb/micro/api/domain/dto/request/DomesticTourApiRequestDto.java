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
    private String diseasesThreeYearsAgreement;
    private String dangerLeisureSportsAgreement;
    private String travelPurpose;
    private String privacyInfoAgreement;
    private String deleteYn;

    public DomesticTourApi toEntity() {
      return DomesticTourApi.builder()
          .userName(this.userName)
          .juminFront(this.juminFront)
          .juminBack(this.juminBack)
          .phoneNum(this.phoneNum)
          .email(this.email)
          .diseasesThreeYearsAgreement(this.diseasesThreeYearsAgreement)
          .dangerLeisureSportsAgreement(this.dangerLeisureSportsAgreement)
          .travelPurpose(this.travelPurpose)
          .privacyInfoAgreement(this.privacyInfoAgreement)
          .deleteYn('N')
          .build();
    }
  }
}
