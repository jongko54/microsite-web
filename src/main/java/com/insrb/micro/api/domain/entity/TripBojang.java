package com.insrb.micro.api.domain.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "tb_trip_bojang")
public class TripBojang {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long bCode;
    private String bName;
    private long bMoney;
    private long bSelfMoney;
    private char bFlag;
    private LocalDateTime bDueDate;
    private int order;
    private String displayName;
    private int category;

    @Builder
    public TripBojang( long bCode, String bName, long bMoney, long bSelfMoney, char bFlag, LocalDateTime bDueDate, int order,
                       String displayName, int category) {

        this.bCode = bCode;
        this.bName = bName;
        this.bMoney = bMoney;
        this.bSelfMoney = bSelfMoney;
        this.bFlag = bFlag;
        this.bDueDate = bDueDate;
        this.order = order;
        this.displayName = displayName;
        this.category = category;
    }
}