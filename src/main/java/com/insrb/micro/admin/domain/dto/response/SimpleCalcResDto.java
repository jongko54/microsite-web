package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.time.LocalDateTime;
import java.util.Date;
import lombok.Data;

@Data
public class SimpleCalcResDto {

  private long id;
  private Date startDate;
  private Date endDate;
  private String juminFront;
  private String gender;
  private char deleteYn;

  private String createdBy;
  private String updatedBy;
  private LocalDateTime createdDate;
  private LocalDateTime updatedDate;

  public SimpleCalcResDto(SimpleCalc entity){
    id               = entity.getId();
    startDate        = entity.getStartDate();
    endDate          = entity.getEndDate();
    juminFront       = entity.getJuminFront();
    gender           = entity.getGender();

    createdBy = entity.getCreatedBy();
    updatedBy = entity.getUpdatedBy();
    createdDate = entity.getCreatedDate();
    updatedDate = entity.getUpdatedDate();
    deleteYn = entity.getDeleteYn();
  }

}
