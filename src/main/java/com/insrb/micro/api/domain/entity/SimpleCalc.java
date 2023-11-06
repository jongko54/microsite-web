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
@Table(name = "tb_simpleCalc")
@Getter
@NoArgsConstructor
public class SimpleCalc extends CommonEntity{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private Date startDate;
  private Date endDate;
  private String juminFront;
  private String gender;
  private char deleteYn;

  @Builder
  public SimpleCalc(long id, Date startDate,Date endDate, String juminFront, String gender, char deleteYn) {
    this.startDate  = startDate;
    this.endDate    = endDate;
    this.juminFront = juminFront;
    this.gender     = gender;
    this.deleteYn   = deleteYn;
  }
}
