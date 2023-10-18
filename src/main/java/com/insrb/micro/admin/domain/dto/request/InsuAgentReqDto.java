package com.insrb.micro.admin.domain.dto.request;

import com.insrb.micro.admin.domain.entity.InsuAgent;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class InsuAgentReqDto {

    private String companyName;
    private String insuId;
    private String insuName;
    private char deleteYn;


    public InsuAgent toEntity(){
        return InsuAgent.builder()
                .companyName(this.companyName)
                .insuId(this.insuId)
                .insuName(this.insuName)
                .deleteYn('N')
                .regdate(LocalDateTime.now())
                .build();
    }


//    public List<InsuAgent> ListDtoToListEntity(List<InsuAgent> item){
//        return item.stream()
//                .map(InsuAgentReqDto::toEntity)
//                .collect(Collectors.toList());
//    }

}
