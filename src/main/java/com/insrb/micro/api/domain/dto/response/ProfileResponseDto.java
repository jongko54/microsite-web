package com.insrb.micro.api.domain.dto.response;


import com.insrb.micro.api.domain.entity.InsuAgentApi;
import com.insrb.micro.api.domain.entity.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;

@Data
@NoArgsConstructor
public class ProfileResponseDto {

    private String userId;
    private String userName;
//    private InsuAgentApi insuAgentApi;
    private String companyName;
    private String insuId;
    private String phoneRole;
    private String loginType;
    private String address;
    private String address_detail;
    private String marketing_yn;

    public ProfileResponseDto(User entity){
        this.userId = entity.getUserId();
        this.userName = entity.getUserName();
        this.phoneRole = entity.getPhoneRole();
        this.loginType = entity.getLoginType();
        this.address = entity.getAddress();
        this.address_detail = entity.getAddress_detail();
        this.marketing_yn = entity.getMarketing_yn();
//        this.insuAgentApi = entity.getInsuAgent();
        if(entity.getInsuAgent() != null){
            this.companyName = entity.getInsuAgent().getCompanyName();
            this.insuId = entity.getInsuAgent().getInsuId();
        }
    }

}
