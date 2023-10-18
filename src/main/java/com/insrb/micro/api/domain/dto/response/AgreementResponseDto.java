package com.insrb.micro.api.domain.dto.response;


import com.insrb.micro.api.domain.entity.Agreement;
import lombok.Data;

@Data
public class AgreementResponseDto {
    private String agreementTitle;
    private String agreementContent;
    private char importantYn;
    private char deleteYn;

    public AgreementResponseDto(Agreement entity){
        this.agreementTitle = entity.getAgreementTitle();
        this.agreementContent = entity.getAgreementContent();
        this.importantYn = entity.getImportantYn();
        this.deleteYn = entity.getDeleteYn();
    }
}
