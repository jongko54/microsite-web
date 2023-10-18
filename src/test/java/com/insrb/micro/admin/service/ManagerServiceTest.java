package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.entity.Manager;
import com.insrb.micro.admin.repository.ManagerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;


@SpringBootTest
class ManagerServiceTest {

    @Autowired
    ManagerRepository managerRepository;


    @Test
    void save(){
//        String test = new BCryptPasswordEncoder().encode("insurobo1!");

          Manager member = Manager.builder()
                  .userPw(new BCryptPasswordEncoder().encode("test4"))
                  .deleteYn('N')
                  .build();


          managerRepository.save(member);

//        MemberReqDto req = req.toEntity();

//        managerRepository.save(member);


    }

    @Test
    void selectUserTest(){
        List<Manager> list = managerRepository.findAll();

        for(Manager m : list){
//            System.out.println(m.getUser_id());
        }
    }

    @Test
    void loginTest(){
        String id ="admin";

//        Optional<Member> member = managerRepository.findByUser_id(id);

//        Optional<Member> member = managerRepository.findById(1L);

//        System.out.println(member.stream().map(MemberResDto::new).collect(Collectors.toList()));
    }

}
