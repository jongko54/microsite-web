package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.util.List;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class SimpleCalcApiResponseDto {

  @ApiModelProperty(example = "보험금")
  private int fee;

  @ApiModelProperty(example = "보험 구분(1: 안심, 3: 든든)")
  private char gubun;

  private List<TripBojangResponseDto> tripBojangResponseDto;


  public SimpleCalcApiResponseDto(SimpleCalc entity, List<TripBojangResponseDto> tripBojangResponseDto) {
    this.fee = entity.getFee();
    this.gubun = entity.getGubun();
    this.tripBojangResponseDto = tripBojangResponseDto;
  }

}
