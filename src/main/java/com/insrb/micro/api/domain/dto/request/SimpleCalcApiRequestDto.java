package com.insrb.micro.api.domain.dto.request;

import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.util.Date;
import lombok.Data;
import lombok.RequiredArgsConstructor;

public class SimpleCalcApiRequestDto {

  @Data
  @RequiredArgsConstructor
  public static class SimpleCalcApiReq{
    private Date startDate;
    private Date endDate;
    private String juminFront;
    private String gender;
    private String deleteYn;

    public SimpleCalc toEntity(){
      return SimpleCalc.builder()
          .startDate(this.startDate)
          .endDate(this.endDate)
          .juminFront(this.juminFront)
          .gender(this.gender)
          .deleteYn('N')
          .build();
    }
  }
}
