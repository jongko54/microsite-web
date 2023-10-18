package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.entity.Consulting;
import com.insrb.micro.api.repository.ConsultingApiRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ConsultingApiServiceTest {

    @Autowired
    ConsultingApiRepository consultingApiRepository;

    @Test
    void 상담신청(){
        Consulting params = Consulting.builder()
                .name("테스터")
                .phoneRole("01012345695")
                .business("금융 판매업")
                .consultingYn('N')
                .deleteYn('N')
                .build();

        String name = consultingApiRepository.save(params).getName();

        System.out.println(name);

    }
}
