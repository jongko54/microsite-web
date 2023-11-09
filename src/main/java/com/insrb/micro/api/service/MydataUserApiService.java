package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.entity.MydataUser;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto.MydataUserApiReq;
import com.insrb.micro.api.domain.dto.response.MydataUserApiResponseDto;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.MydataUserApiRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class MydataUserApiService {

  private final MydataUserApiRepository mydataUserApiRepository;

  //리스트 api
  @javax.transaction.Transactional
  public List<MydataUserApiResponseDto> mydataUserList(Long id){
    List<MydataUser> list = null;

    if(id == null){
      list = mydataUserApiRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }else{
      list = mydataUserApiRepository.findAllById(id, Sort.by(Sort.Direction.DESC, "id"));
    }

    return list.stream().map(MydataUserApiResponseDto::new).collect(Collectors.toList());
  }

  //업데이트
  @javax.transaction.Transactional
  public Long mydataUserUpdate(long id, MydataUserApiReq params) {
    System.out.println(id);
    MydataUser entity = mydataUserApiRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
    entity.update(params);
//    entity.update(params.getUserName(),params.getUserEmail(), params.getPhoneAgency(), params.getPhoneRole(),
//        params.getResidentNumberFront(),params.getResidentNumberBack(), params.getCompanyName(), params.getHousingType(),params.getHousingDivision(),
//        params.getBusinessIncome(), params.getCarOwner(), params.getCarName(),
//        params.getMotorcycle(), params.getHeight(), params.getWeight(), params.getDisease(), params.getDiseaseName(),
//        params.getPhysicalDisability(), params.getPhysicalDisabilityLevel(), params.getMarriage(),params.getChildren(),
//        params.getPreschoolChild(),params.getElderlyFamily(), params.getPrivacyAgreement(), params.getThirdPartiesAgreement(),
//        params.getMarketingAgreement(), params.toEntity().getDeleteYn()
//    );
    return entity.getId();
  }


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
  /**
   * 마이데이터 회원 중복 확인
   *
   * @param userName
   * @param phoneRole
   * @return true,false
   */
  public boolean mydataUserCheck(String userName,String phoneRole){

    Boolean valCheck = mydataUserApiRepository.existsMydataUserByUserNameAndPhoneRole(userName,phoneRole);

    if(valCheck == true){
      return true;
    }
    return false;
  }
}
