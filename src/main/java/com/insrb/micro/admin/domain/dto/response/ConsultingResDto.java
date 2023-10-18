package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.api.domain.entity.Consulting;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ConsultingResDto {

    private Long id;
    private String name;
    private String phoneRole;
    private String business;
    private char consultingYn;
    private LocalDateTime consultingSuccessDate;
    private char deleteYn;

    public ConsultingResDto(Consulting entity){
        this.id = entity.getId();
        this.name = entity.getName();
        this.phoneRole = entity.getPhoneRole();
        this.business = entity.getBusiness();
        this.consultingYn = entity.getConsultingYn();
        this.consultingSuccessDate = entity.getConsultingSuccessDate();
        this.deleteYn = entity.getDeleteYn();
    }


}
