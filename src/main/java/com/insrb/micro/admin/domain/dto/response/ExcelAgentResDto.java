package com.insrb.micro.admin.domain.dto.response;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ExcelAgentResDto {

    private String companyName;
    private String insuId;
    private String insuName;


    @Builder
    public ExcelAgentResDto(String companyName, String insuId, String insuName) {
        this.companyName = companyName;
        this.insuId = insuId;
        this.insuName = insuName;
    }
}

