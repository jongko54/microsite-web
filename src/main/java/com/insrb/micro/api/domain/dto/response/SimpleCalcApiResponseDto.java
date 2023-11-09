package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.util.Date;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class SimpleCalcApiResponseDto {

  @ApiModelProperty(example = "보험금")
  private int fee;

  @ApiModelProperty(example = "보험 구분(1: 안심, 2: 든든)")
  private char gubun;


  public SimpleCalcApiResponseDto(SimpleCalc entity) {
    this.fee = entity.getFee();
    this.gubun = entity.getGubun();
  }

}
