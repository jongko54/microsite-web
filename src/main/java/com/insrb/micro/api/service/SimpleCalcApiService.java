package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.entity.MydataUser;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto.MydataUserApiReq;
import com.insrb.micro.api.domain.dto.request.SimpleCalcApiRequestDto.SimpleCalcApiReq;
import com.insrb.micro.api.domain.dto.response.MydataInsuranceApiResponseDto;
import com.insrb.micro.api.domain.dto.response.SimpleCalcApiResponseDto;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import com.insrb.micro.api.domain.entity.SimpleCalc;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.MydataUserApiRepository;
import com.insrb.micro.api.repository.SimpleCalcApiRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MultiValueMap;

@Service
@Slf4j
@RequiredArgsConstructor
public class SimpleCalcApiService {

  private final SimpleCalcApiRepository simpleCalcApiRepository;
  
  //저장
  @Transactional
  public long simpleCalSave( SimpleCalcApiReq params) {
    SimpleCalc entity = simpleCalcApiRepository.save(params.toEntity());

    if(entity == null){
      throw new CustomException(ErrorCode.FAIL_NOT_SAVE);
    }

    return entity.getId();
  }

  //리스트
  @javax.transaction.Transactional
  public List<SimpleCalcApiResponseDto> simpleCalcList(MultiValueMap<String, String> params){
    List<SimpleCalc> list = null;

    if(params == null){
      list = simpleCalcApiRepository.findAll(Sort.by(Sort.Direction.DESC, "params"));
    }else{
      Object aa = "aa";
      //list = simpleCalcApiRepository.findAllById(params.get("aa",aa), Sort.by(Sort.Direction.DESC, "params"));
    }

    return list.stream().map(SimpleCalcApiResponseDto::new).collect(Collectors.toList());
  }

//  public MydataInsuranceApiResponseDto mydataInsuranceDetail(long param) {
//    MydataInsuranceApi entity = simpleCalcApiRepository.findById(param).orElseThrow(() -> new CustomException(
//        ErrorCode.POSTS_NOT_FOUND));
//
//
//    return new MydataInsuranceApiResponseDto(entity);
//  }



}
