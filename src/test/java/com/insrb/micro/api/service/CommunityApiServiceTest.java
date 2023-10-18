package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.dto.response.CommApiResponseDto;
import com.insrb.micro.api.domain.entity.CommunityApi;
import com.insrb.micro.api.repository.CommunityApiRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class CommunityApiServiceTest {

    @Autowired
    CommunityApiRepository communityApiRepository;

    @Test
    @DisplayName("커뮤니티 목록 불러오기")
    void list(){
        String category = null;

    }
}
