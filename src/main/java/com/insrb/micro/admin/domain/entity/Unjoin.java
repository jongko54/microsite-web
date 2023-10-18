package com.insrb.micro.admin.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "tb_insu_status")
public class Unjoin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String polholder;
    private String regi_birth_front;
    private String regi_birth_back;
    private String mobile;
    private String address;
    private String detail_addr;
    private String business_type;
    private String businessNumber;
    private String business_name;
    private String business_owner;
    private String area;
    private String floor_low;
    private String floor_high;
    private LocalDateTime regdate;
    private String flag;
    private Integer per_prem;
    private Integer govt_prem;
    private Integer lgovt_prem;
    private Integer tpym_prem;
    private String fail_reason;
    private String business_code;
    private String business_objcat;
    private String required1;
    private String required2;
    private String required3;
    private String marketing_options;
    private String same_bsnum;

    @Builder
    public Unjoin(String polholder, String regi_birth_front, String regi_birth_back, String mobile, String address, String detail_addr, String business_type, String business_number, String business_name, String business_owner, String area, String floor_low, String floor_high, LocalDateTime regdate, String flag, int per_prem, int govt_prem, int lgovt_prem, int tpym_prem, String fail_reason, String business_code, String business_objcat, String required1, String required2, String required3, String marketing_options, String same_bsnum) {
        this.polholder = polholder;
        this.regi_birth_front = regi_birth_front;
        this.regi_birth_back = regi_birth_back;
        this.mobile = mobile;
        this.address = address;
        this.detail_addr = detail_addr;
        this.business_type = business_type;
        this.businessNumber = business_number;
        this.business_name = business_name;
        this.business_owner = business_owner;
        this.area = area;
        this.floor_low = floor_low;
        this.floor_high = floor_high;
        this.regdate = regdate;
        this.flag = flag;
        this.per_prem = per_prem;
        this.govt_prem = govt_prem;
        this.lgovt_prem = lgovt_prem;
        this.tpym_prem = tpym_prem;
        this.fail_reason = fail_reason;
        this.business_code = business_code;
        this.business_objcat = business_objcat;
        this.required1 = required1;
        this.required2 = required2;
        this.required3 = required3;
        this.marketing_options = marketing_options;
        this.same_bsnum = same_bsnum;
    }
}
