package com.insrb.micro.api.service;


import com.insrb.micro.admin.repository.CommunityRepository;
import com.insrb.micro.api.domain.dto.response.CommApiResponseDto;
import com.insrb.micro.api.domain.entity.CommunityApi;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.CommunityApiRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class CommunityApiService {

    private final CommunityApiRepository communityApiRepository;

    @Transactional
    public List<CommApiResponseDto> communityList(String category){
        List<CommunityApi> list = null;

        if(category == null){
            list = communityApiRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
        }else{
            list = communityApiRepository.findAllByCode(category, Sort.by(Sort.Direction.DESC, "id"));
        }

        return list.stream().map(CommApiResponseDto::new).collect(Collectors.toList());
    }

    public CommApiResponseDto communityDetail(long param) {
        CommunityApi entity = communityApiRepository.findById(param).orElseThrow(() -> new CustomException(ErrorCode.POSTS_NOT_FOUND));


        return new CommApiResponseDto(entity);
    }
}
