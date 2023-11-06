package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.entity.MydataUser;
import com.insrb.micro.api.domain.dto.request.DomesticTourApiRequestDto.DomesticTourApiReq;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto.MydataUserApiReq;
import com.insrb.micro.api.domain.dto.response.DomesticTourApiResponseDto;
import com.insrb.micro.api.domain.dto.response.MydataInsuranceApiResponseDto;
import com.insrb.micro.api.domain.entity.DomesticTourApi;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.DomesticTourApiRepository;
import com.insrb.micro.api.repository.MydataInsuranceApiRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class DomesticTourApiService {

  private final DomesticTourApiRepository domesticTourApiRepository;

  @Transactional
  public long domesticTourSave( DomesticTourApiReq params) {
    DomesticTourApi entity = domesticTourApiRepository.save(params.toEntity());

    if(entity == null){
      throw new CustomException(ErrorCode.FAIL_NOT_SAVE);
    }

    return entity.getId();
  }
}
