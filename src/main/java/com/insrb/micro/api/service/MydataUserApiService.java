package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.entity.MydataUser;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto.MydataUserApiReq;
import com.insrb.micro.api.domain.dto.response.MydataUserApiResponseDto;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.MydataUserApiRepository;
import com.insrb.micro.utils.cyper.AESUtil;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;

import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class MydataUserApiService {

  private final MydataUserApiRepository mydataUserApiRepository;

  //리스트 api
  @javax.transaction.Transactional
  public List<MydataUserApiResponseDto> mydataUserList(Long id) {
    List<MydataUser> list = null;

    if (id == null) {
      list = mydataUserApiRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    } else {
      list = mydataUserApiRepository.findAllById(id, Sort.by(Sort.Direction.DESC, "id"));
    }
    System.out.println(list);

    return list.stream()
        .map(
            mydataUser -> {
              try {
                String juminFront= AESUtil.decrypt(mydataUser.getResidentNumberFront());
                String juminBack = AESUtil.decrypt(mydataUser.getResidentNumberBack());
                mydataUser.updateDecryptedValues(juminFront, juminBack);
              } catch (Exception e) {
                e.printStackTrace();
              }

              return new MydataUserApiResponseDto(mydataUser);
            }
            ).collect(Collectors.toList());
  }

  //업데이트
  @javax.transaction.Transactional
  public Long mydataUserUpdate(MydataUserApiReq params) throws Exception {

    MydataUser entity = mydataUserApiRepository.findById(params.getUserId())
        .orElseThrow(() -> new IllegalArgumentException());
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
  public long userSave(MydataUserApiReq params) throws Exception {

    MydataUser entity = mydataUserApiRepository.save(params.toEntity());

    if (entity == null) {
      throw new CustomException(ErrorCode.FAIL_NOT_SAVE);
    }

    entity.updateEncryptedValues(AESUtil.encrypt(entity.getResidentNumberFront()), AESUtil.encrypt(entity.getResidentNumberBack()));

    return entity.getId();
  }



  /**
   * 마이데이터 회원 중복 확인
   *
   * @param userName
   * @param phoneRole
   * @return true, false
   */
  public Long mydataUserCheck(String userName, String phoneRole) {
    return mydataUserApiRepository
        .findByUserNameAndPhoneRole(userName, phoneRole)
        .map(mydataUser -> mydataUser.getId())
        .orElse(-1L);
  }
}
