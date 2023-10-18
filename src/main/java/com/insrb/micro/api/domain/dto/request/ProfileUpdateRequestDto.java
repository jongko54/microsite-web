package com.insrb.micro.api.domain.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
public class ProfileUpdateRequestDto {
    private String userName;
    private String address;
    private String address_detail;
    private String insuId;
}
