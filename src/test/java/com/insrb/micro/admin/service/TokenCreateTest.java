package com.insrb.micro.admin.service;


import com.insrb.micro.api.config.security.jwt.TokenProvider;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TokenCreateTest {

    @Autowired
    TokenProvider tokenProvider;


    @Test
    void 토큰_발급(){
    }
}
