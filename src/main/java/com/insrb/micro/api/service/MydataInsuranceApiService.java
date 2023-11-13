package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.entity.MydataInsurance;
import com.insrb.micro.admin.domain.entity.MydataUser;
import com.insrb.micro.admin.repository.MydataUserRepository;
import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.dto.response.MydataInsuranceApiResponseDto;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.MydataInsuranceApiRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MydataInsuranceApiService {
  private final MydataInsuranceApiRepository mydataInsuranceApiRepository;
  private final MydataUserRepository mydataUserRepository;

  @Transactional
  public List<MydataInsuranceApiResponseDto> mydataInsuranceList(String id, Long userId){
    List<MydataInsuranceApi> list = new ArrayList<>();

    if(id == null){
      list = mydataInsuranceApiRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }else{
      list = mydataInsuranceApiRepository.findAllById(id, Sort.by(Sort.Direction.DESC, "id"));
    }

    Optional<MydataUser> findUser = mydataUserRepository.findById(userId);
    if (findUser.isEmpty())
      return list.stream().map(MydataInsuranceApiResponseDto::new).collect(Collectors.toList());

    return list.stream()
        .filter(insurance -> insurance.getKeyword().contains(findUser.get().getHousingType())
            || insurance.getKeyword().contains(findUser.get().getHousingDivision())
            || motorCycle(findUser.get(), insurance))
        .map(MydataInsuranceApiResponseDto::new)
        .collect(Collectors.toList());
  }

  private boolean motorCycle (MydataUser findUser, MydataInsuranceApi insurance) {
      if (!"".equals(findUser.getMotorcycle())) {
        return insurance.getKeyword().contains(findUser.getMotorcycle());
      }
      return true;
  }

  public MydataInsuranceApiResponseDto mydataInsuranceDetail(long param) {
    MydataInsuranceApi entity = mydataInsuranceApiRepository.findById(param).orElseThrow(() -> new CustomException(
        ErrorCode.POSTS_NOT_FOUND));


    return new MydataInsuranceApiResponseDto(entity);
  }



}
