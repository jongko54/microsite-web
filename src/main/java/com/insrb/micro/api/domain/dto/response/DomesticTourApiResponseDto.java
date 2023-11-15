package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.entity.DomesticTourApi;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
public class DomesticTourApiResponseDto {

  private Long id;
  private Long userId;
  private String userName;
  private String juminFront;
  private String juminBack;
  private String phoneNum;
  private String email;
  private String period;
  private char gubun;
  private Date startDate;
  private Date endDate;
  private String travelPurpose;
  private String beforePayment;
  private int fee;
  private String createdDate;
  private List<TripBojangResponseDto> tripBojangResponseDtos;

  public DomesticTourApiResponseDto(DomesticTourApi entity, List<TripBojangResponseDto> tripBojangResponseDtos) {
    this.id = entity.getId();
    this.createdDate = Utils.getYYYY_MM_DD(entity.getCreatedDate());
    this.userId = entity.getUserId();
    this.userName = entity.getUserName();
    this.juminFront = entity.getJuminFront();
    this.juminBack = entity.getJuminBack();
    this.phoneNum = entity.getPhoneNum();
    this.email = entity.getEmail();
    this.period = entity.getPeriod();
    this.gubun = entity.getGubun();
    this.startDate = entity.getStartDate();
    this.endDate = entity.getEndDate();
    this.travelPurpose = entity.getTravelPurpose();
    this.beforePayment = entity.getBeforePayment();
    this.fee = entity.getFee();
    this.tripBojangResponseDtos = tripBojangResponseDtos;
  }

}
