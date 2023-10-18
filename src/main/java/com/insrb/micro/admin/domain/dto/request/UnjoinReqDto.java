package com.insrb.micro.admin.domain.dto.request;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class UnjoinReqDto {

    private String polholder;
    private String regi_birth_front;
    private String regi_birth_back;
    private String mobile;
    private String address;
    private String detail_addr;
    private String business_type;
    private String business_number;
    private String business_name;
    private String business_owner;
    private String area;
    private String floor_low;
    private String floor_high;
    private LocalDateTime regdate;
    private String flag;
    private int per_prem;
    private int govt_prem;
    private int lgovt_prem;
    private int tpym_prem;
    private String fail_reason;
    private String business_code;
    private String business_objcat;
    private String required1;
    private String required2;
    private String required3;
    private String marketing_options;
    private String same_bsnum;
}
