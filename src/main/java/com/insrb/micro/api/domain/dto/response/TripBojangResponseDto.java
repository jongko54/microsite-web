package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.api.domain.entity.TripBojang;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TripBojangResponseDto {
    private long bCode;
    private String bName;
    private long bMoney;
    private long bSelfMoney;
    private char bFlag;
    private LocalDateTime bDueDate;
    private Integer order;
    private String displayName;
    private Integer category;


    public TripBojangResponseDto(TripBojang mappingToEntity) {
        this.bCode = mappingToEntity.getBCode();
        this.bName = mappingToEntity.getBName();
        this.bMoney = mappingToEntity.getBMoney();
        this.bSelfMoney = mappingToEntity.getBSelfMoney();
        this.bFlag = mappingToEntity.getBFlag();
        this.bDueDate = mappingToEntity.getBDueDate();
        this.order = mappingToEntity.getOrder();
        this.displayName = mappingToEntity.getDisplayName();
        this.category = mappingToEntity.getCategory();
    }
}
