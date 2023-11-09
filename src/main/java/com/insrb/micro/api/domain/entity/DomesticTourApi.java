package com.insrb.micro.api.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "tb_domestic_tour")
public class DomesticTourApi extends CommonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long userId;
    private String userName;
    private String juminFront;
    private String juminBack;
    private String phoneNum;
    private String email;
    private String age;
    private String sex;
    private String period;
    private char gubun;
    private Date startDate;
    private Date endDate;
    private String diseasesThreeYearsAgreement;//최근 3년 내에 특정질병
    private String dangerLeisureSportsAgreement;//위험한 레포츠
    private String foreignerYn;
    private String travelPurpose;//여행 목적
    private String privacyInfoAgreement;//개인정보수집 동의
    private String beforePayment;//결제 전
    private int fee;
    @Column(name = "deleteYn")
    private char deleteYn;

    @Builder
    public DomesticTourApi(long id, long userId, String userName, String juminFront, String juminBack, String phoneNum, String email, String age,
                           String sex, String period, char gubun, Date startDate, Date endDate,
                           String diseasesThreeYearsAgreement, String dangerLeisureSportsAgreement, String foreignerYn, String travelPurpose, String privacyInfoAgreement, String beforePayment, int fee, char deleteYn) {
        this.userId = userId;
        this.userName = userName;
        this.juminFront = juminFront;
        this.juminBack = juminBack;
        this.phoneNum = phoneNum;
        this.email = email;
        this.age = age;
        this.sex = sex;
        this.period = period;
        this.gubun = gubun;
        this.startDate = startDate;
        this.endDate = endDate;
        this.diseasesThreeYearsAgreement = diseasesThreeYearsAgreement;
        this.dangerLeisureSportsAgreement = dangerLeisureSportsAgreement;
        this.foreignerYn = foreignerYn;
        this.travelPurpose = travelPurpose;
        this.privacyInfoAgreement = privacyInfoAgreement;
        this.beforePayment = beforePayment;

        this.deleteYn = deleteYn;
    }

}
