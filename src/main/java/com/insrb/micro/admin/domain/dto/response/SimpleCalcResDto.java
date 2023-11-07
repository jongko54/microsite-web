package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.time.LocalDateTime;
import java.util.Date;
import lombok.Data;

@Data
public class SimpleCalcResDto {

  private long id;
  private char sex;
  private String age;
  private String period;
  private double ratio;
  private int fee;
  private Date dueDate;
  private char gubun;


  public SimpleCalcResDto(SimpleCalc entity){
    id = entity.getId();
    sex = entity.getSex();
    age = entity.getAge();
    period = entity.getPeriod();
    ratio = entity.getRatio();
    fee = entity.getFee();
    dueDate = entity.getDueDate();
    gubun = entity.getGubun();
  }

}
