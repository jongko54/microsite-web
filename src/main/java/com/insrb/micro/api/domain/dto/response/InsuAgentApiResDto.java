package com.insrb.micro.api.domain.dto.response;

import com.insrb.micro.admin.domain.entity.InsuAgent;
import com.insrb.micro.api.domain.entity.InsuAgentApi;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InsuAgentApiResDto {

        private String companyName;

        public InsuAgentApiResDto(InsuAgentApi entity){
            this.companyName = entity.getCompanyName();
        }

}
