package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.dto.response.InsuAgentResDto;
import com.insrb.micro.api.domain.entity.InsuAgentApi;
import com.insrb.micro.api.repository.InsuAgentApiRespository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class InsuAgentApiServiceTest {

    @Autowired
    InsuAgentApiService insuAgentApiService;

    @Autowired
    InsuAgentApiRespository insuAgentApiRespository;


    @Test
    void test(){

        List<InsuAgentApi> res = insuAgentApiRespository.findCompany();

        System.out.println(res.toString());
    }
}