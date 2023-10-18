package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.CommunityReqDto;
import com.insrb.micro.admin.domain.dto.response.CommunityResDto;
import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.repository.CommunityRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CommunityServiceTest {

    @Autowired
    CommunityRepository communityRepository;

    @Test
    void save(){
//        Community params = Community.builder()
//                .category("이벤트")
//                .title("테스트 제목")
//                .content("테스트 내용")
//                .writer("admin")
//                .deleteYn('N')
//                .build();

        CommunityReqDto communityReqDto = new CommunityReqDto();
        communityReqDto.setCategory("대출");
        communityReqDto.setTitle("테스트 제목 5");
        communityReqDto.setContent("테스트 내용 5");
        communityReqDto.setDeleteYn('N');

        Community params = communityReqDto.toEntity();

        communityRepository.save(params);
    }

    @Test
    @DisplayName("게시글 삭제")
    void delete(){
        Community entitiy = communityRepository.findById((long) 1).get();
        communityRepository.delete(entitiy);
    }

    @Test
    @DisplayName("쿼리어노테이션 테스트")
    void queryList(){
        String title = "대출";

        Pageable pageable = PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, "id"));

        Page<Community> list = communityRepository.findAllByTitleContaining(pageable, title);

        for(Community c : list){
            System.out.println(c.getId());
            System.out.println(c.getTitle());
        }
    }
}
