package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.dto.response.InsuranceApiResponseDto;
import com.insrb.micro.api.domain.entity.InsuranceApi;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.InsuranceApiRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class InsuranceApiService {
  private final InsuranceApiRepository insuranceApiRepository;

  @Transactional
  public List<InsuranceApiResponseDto> insuranceList(String id){
    List<InsuranceApi> list = null;

    if(id == null){
      list = insuranceApiRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }else{
      list = insuranceApiRepository.findAllById(id, Sort.by(Sort.Direction.DESC, "id"));
    }

    return list.stream().map(InsuranceApiResponseDto::new).collect(Collectors.toList());
  }

  public InsuranceApiResponseDto insuranceDetail(long param) {
    InsuranceApi entity = insuranceApiRepository.findById(param).orElseThrow(() -> new CustomException(
        ErrorCode.POSTS_NOT_FOUND));


    return new InsuranceApiResponseDto(entity);
  }



}
