package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.MydataUser;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto.MydataUserApiReq;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.MydataUserApiRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class MydataUserApiService {

  private final MydataUserApiRepository mydataUserApiRepository;

  /**
   * 마이데이터 회원 정보 저장
   *
   * @param
   * @param params
   * @return
   */
  @Transactional
  public long userSave( MydataUserApiReq params) {
    MydataUser entity = mydataUserApiRepository.save(params.toEntity());

    if(entity == null){
      throw new CustomException(ErrorCode.FAIL_NOT_SAVE);
    }

    return entity.getId();
  }

}
