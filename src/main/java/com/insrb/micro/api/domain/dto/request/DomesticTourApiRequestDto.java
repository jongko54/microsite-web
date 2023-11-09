package com.insrb.micro.api.domain.dto.request;

import com.insrb.micro.api.domain.entity.DomesticTourApi;
import com.insrb.micro.api.domain.entity.SimpleCalc;

import java.time.LocalDateTime;
import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.RequiredArgsConstructor;

public class DomesticTourApiRequestDto {

    @Data
    @RequiredArgsConstructor
    @ApiModel(value = "국내 보험 등록 정보")
    public static class DomesticTourApiReq {
        private String id;

        private Long userId;

        @ApiModelProperty(value = "유저 이름")
        private String userName;

        @ApiModelProperty(value = "주민등록번호 앞자리")
        private String juminFront;

        @ApiModelProperty(value = "주민등록번호 뒷자리")
        private String juminBack;

        @ApiModelProperty(value = "핸드폰번호")
        private String phoneNum;

        @ApiModelProperty(value = "이메일")
        private String email;

        @ApiModelProperty(value = "나이")
        private String age;

        @ApiModelProperty(value = "성별")
        private String sex;

        @ApiModelProperty(value = "기간")
        private String period;

        @ApiModelProperty(value = "보험 구분(1: 든든, 3: 안심)")
        private char gubun;

        @ApiModelProperty(value = "여행 시작일")
        private Date startDate;

        @ApiModelProperty(value = "여행 마감일")
        private Date endDate;

        @ApiModelProperty(value = "3년간 특정 질병(Y, N)")
        private String diseasesThreeYearsAgreement;

        @ApiModelProperty(value = "위험한 레포츠(Y, N)")
        private String dangerLeisureSportsAgreement;

        @ApiModelProperty(value = "외국인 여부(Y, N)")
        private String foreignerYn;

        @ApiModelProperty(value = "여행 목적")
        private String travelPurpose;

        @ApiModelProperty(value = "개인정보수집(Y, N)")
        private String privacyInfoAgreement;

        @ApiModelProperty(value = "결제전 여부(Y, N)")
        private String beforePayment;

        @ApiModelProperty(value = "삭제 여부(Y, N)")
        private String deleteYn;

        private int fee;

        public DomesticTourApi toEntity() {
            return DomesticTourApi.builder()
                    .userName(this.userName)
                    .userId(this.userId)
                    .juminFront(this.juminFront)
                    .juminBack(this.juminBack)
                    .phoneNum(this.phoneNum)
                    .email(this.email)
                    .age(this.age)
                    .sex(this.sex)
                    .period(this.period)
                    .gubun(this.gubun)
                    .startDate(this.startDate)
                    .endDate(this.endDate)
                    .diseasesThreeYearsAgreement(this.diseasesThreeYearsAgreement)
                    .dangerLeisureSportsAgreement(this.dangerLeisureSportsAgreement)
                    .travelPurpose(this.travelPurpose)
                    .privacyInfoAgreement(this.privacyInfoAgreement)
                    .beforePayment("Y")
                    .foreignerYn(this.foreignerYn)
                    .fee(this.fee)
                    .deleteYn('N')
                    .build();
        }
    }
}
