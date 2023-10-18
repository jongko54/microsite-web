package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.admin.domain.entity.Unjoin;
import com.insrb.micro.utils.cyper.UserInfoCyper;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
public class UnjoinResDto {

    private long id;
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

    public UnjoinResDto(Unjoin entity) {
        id = entity.getId();
        polholder = entity.getPolholder();
        regi_birth_front = entity.getRegi_birth_front();
        regi_birth_back = entity.getRegi_birth_back();
        mobile = entity.getMobile();
        address = entity.getAddress();
        detail_addr = entity.getDetail_addr();
        business_type = entity.getBusiness_type();
        business_number = entity.getBusinessNumber();
        business_name = entity.getBusiness_name();
        business_owner = entity.getBusiness_owner();
        area = entity.getArea();
        floor_low = entity.getFloor_low();
        floor_high = entity.getFloor_high();
        regdate = entity.getRegdate();
        flag = entity.getFlag();
    }
}
