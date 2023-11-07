package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.dto.request.SimpleCalcApiRequestDto.SimpleCalcApiReq;
import com.insrb.micro.api.domain.dto.response.SimpleCalcApiResponseDto;
import com.insrb.micro.api.domain.entity.SimpleCalc;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.SimpleCalcApiRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class SimpleCalcApiService {

  private final SimpleCalcApiRepository simpleCalcApiRepository;

  //저장
  @Transactional
  public long simpleCalSave(SimpleCalcApiReq params) {
    SimpleCalc entity = simpleCalcApiRepository.save(params.toEntity());

    if (entity == null) {
      throw new CustomException(ErrorCode.FAIL_NOT_SAVE);
    }

    return entity.getId();
  }

  //리스트
  @javax.transaction.Transactional
  public List<SimpleCalcApiResponseDto> simpleCalcList(String age, char sex, String period) {

    return simpleCalcApiRepository.findByAgeAndSexAndPeriod(age, sex, period)
        .stream()
        .map(SimpleCalcApiResponseDto::new)
        .collect(Collectors.toList());
  }
}