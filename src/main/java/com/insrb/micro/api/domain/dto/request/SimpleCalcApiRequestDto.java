package com.insrb.micro.api.domain.dto.request;

import com.insrb.micro.api.domain.entity.SimpleCalc;

import java.util.Date;

import lombok.Data;
import lombok.RequiredArgsConstructor;

public class SimpleCalcApiRequestDto {

    @Data
    @RequiredArgsConstructor
    public static class SimpleCalcApiReq {
        private char sex;
        private String age;
        private int period;
        private double ratio;
        private int fee;
        private Date dueDate;
        private char gubun;

        public SimpleCalc toEntity() {
            return SimpleCalc.builder()
                    .sex(this.sex)
                    .age(this.age)
                    .period(this.period)
                    .ratio(this.ratio)
                    .fee(this.fee)
                    .dueDate(this.dueDate)
                    .gubun(this.gubun)
                    .build();
        }
    }
}
