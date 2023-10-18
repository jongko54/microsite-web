package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.dto.response.InfoPlaceApiResponseDto;
import com.insrb.micro.api.domain.entity.InfoPlaceApi;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.InfoPlaceApiRepository;
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
public class InfoPlaceApiService {
    private final InfoPlaceApiRepository infoPlaceApiRepository;

    @Transactional
    public List<InfoPlaceApiResponseDto> infoPlaceList(String title){
        List<InfoPlaceApi> list = null;

        if(title == null){
            list = infoPlaceApiRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
        }else{
            list = infoPlaceApiRepository.findAllByTitle(title, Sort.by(Sort.Direction.DESC, "id"));
        }

        return list.stream().map(InfoPlaceApiResponseDto::new).collect(Collectors.toList());
    }

    public InfoPlaceApiResponseDto infoPlaceDetail(long param) {
        InfoPlaceApi entity = infoPlaceApiRepository.findById(param).orElseThrow(() -> new CustomException(ErrorCode.POSTS_NOT_FOUND));


        return new InfoPlaceApiResponseDto(entity);
    }
}

