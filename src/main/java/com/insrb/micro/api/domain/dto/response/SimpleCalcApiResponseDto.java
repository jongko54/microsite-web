package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.util.Date;
import lombok.Data;

@Data
public class SimpleCalcApiResponseDto {

//  private Long id;
//  private char sex;
//  private String age;
//  private String period;
//  private double ratio;
  private int fee;
//  private Date dueDate;
  private char gubun;


  public SimpleCalcApiResponseDto(SimpleCalc entity) {
//    this.id = entity.getId();
//    this.sex = entity.getSex();
//    this.age = entity.getAge();
//    this.period = entity.getPeriod();
//    this.ratio = entity.getRatio();
    this.fee = entity.getFee();
//    this.dueDate = entity.getDueDate();
    this.gubun = entity.getGubun();
  }

}
