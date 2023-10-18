package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.dto.response.ProfileResponseDto;
import com.insrb.micro.api.domain.entity.InsuAgentApi;
import com.insrb.micro.api.domain.entity.User;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.InsuAgentApiRespository;
import com.insrb.micro.api.repository.UserRepository;
import org.apache.tomcat.util.compat.JrePlatform;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProfileServiceTest {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;


    @Test
    @DisplayName("비밀번호 매칭 테스트")
    void 비밀번호(){

        String old_pass = "$2a$10$FKMl59/BV6TJjftqi32lhOD24XvpScuzEGRfValHnTq1TS9aVbMr.";
        String input_pass = "1234";

        boolean test = passwordEncoder.matches(input_pass, old_pass);

        System.out.println(test);

    }

    @Test
    void 쿼리테스트(){
        long id = 3;

        User entity = userRepository.findByMyprofile(id);



//        System.out.println(test1.toString());
        System.out.println(new ProfileResponseDto(entity).toString());


    }
}
