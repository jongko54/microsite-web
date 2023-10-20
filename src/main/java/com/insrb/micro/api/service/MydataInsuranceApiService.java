package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.dto.response.MydataInsuranceApiResponseDto;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.MydataInsuranceApiRepository;
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
public class MydataInsuranceApiService {
  private final MydataInsuranceApiRepository mydataInsuranceApiRepository;

  @Transactional
  public List<MydataInsuranceApiResponseDto> mydataInsuranceList(String id){
    List<MydataInsuranceApi> list = null;

    if(id == null){
      list = mydataInsuranceApiRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }else{
      list = mydataInsuranceApiRepository.findAllById(id, Sort.by(Sort.Direction.DESC, "id"));
    }

    return list.stream().map(MydataInsuranceApiResponseDto::new).collect(Collectors.toList());
  }

  public MydataInsuranceApiResponseDto mydataInsuranceDetail(long param) {
    MydataInsuranceApi entity = mydataInsuranceApiRepository.findById(param).orElseThrow(() -> new CustomException(
        ErrorCode.POSTS_NOT_FOUND));


    return new MydataInsuranceApiResponseDto(entity);
  }



}
