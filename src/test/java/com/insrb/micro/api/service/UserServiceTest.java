package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.repository.CommunityRepository;
import com.insrb.micro.api.domain.entity.Agreement;
import com.insrb.micro.api.domain.entity.User;
import com.insrb.micro.api.repository.AgreementRepository;
import com.insrb.micro.api.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class UserServiceTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommunityRepository communityRepository;

    @Autowired
    private AgreementRepository agreementRepository;

    @Test
    @DisplayName("회원가입 테스트")
    void join(){
        User user = User.builder()
                .userId("test1")
                .userPw("1111")
                .userName("테스터")
                .phoneRole("01011111111")
                .build();

      String test = userRepository.save(user).getUserId();

        System.out.println(test);
    }

    @Test
    @DisplayName("수정 테스트")
    void update(){

        long id = 2;
        String ca = "test";
        String title = "제목테스트";
        String content = "내용";
        char deleteYn = 'N';

        Community entity = communityRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());

        System.out.println(entity.getId());


//        String id = "b9620006@hanmail.net";
//        Optional<User> user = userRepository.findByUserId(id);
//        System.out.println("수정전 : " + user.get().getUserName());
//        user.map(m-> m.update("test"));
//        System.out.println("수정후 : " + user.get().getUserName());
    }


    @Test
    @DisplayName("약관동의 저장")
    void agreeSave(){
        Agreement entity = Agreement.builder()
                .agreementTitle("약관동의 테스트3")
                .agreementContent("약관 내용3")
                .importantYn('N')
                .deleteYn('N')
                .build();

        agreementRepository.save(entity);
    }

    @Test
    void agreeDelete(){

    }


}
