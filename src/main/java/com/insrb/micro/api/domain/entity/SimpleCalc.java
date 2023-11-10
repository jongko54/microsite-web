package com.insrb.micro.api.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_trip_fee")
@Getter
@NoArgsConstructor
public class SimpleCalc {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private char sex;
  private String age;
  private int period;
  private double ratio;
  private int fee;
  private Date dueDate;
  private char gubun;

  @Builder
  public SimpleCalc(long id, Date dueDate, char sex, String age, double ratio, int fee, int period, char gubun) {
    this.sex = sex;
    this.age = age;
    this.period = period;
    this.ratio = ratio;
    this.fee = fee;
    this.dueDate = dueDate;
    this.gubun = gubun;
  }
}
