package com.insrb.micro.admin.domain.dto.response;


import com.insrb.micro.admin.domain.entity.InsuAgent;
import com.insrb.micro.api.domain.entity.InsuAgentApi;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InsuAgentResDto {

    private long id;
    private String companyName;
    private String insuId;
    private String insuName;
    private LocalDateTime regdate;
    private char deleteYn;


    public InsuAgentResDto(InsuAgent entity){
        this.id = entity.getId();
        this.companyName = entity.getCompanyName();
        this.insuId = entity.getInsuId();
        this.insuName = entity.getInsuName();
        this.regdate = entity.getRegdate();
        this.deleteYn = entity.getDeleteYn();
    }


}
