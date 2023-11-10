package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.entity.MydataUser;
import com.insrb.micro.api.config.security.jwt.TokenProvider;
import com.insrb.micro.api.domain.dto.request.DomesticTourApiRequestDto.DomesticTourApiReq;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto.MydataUserApiReq;
import com.insrb.micro.api.domain.dto.response.DomesticTourApiResponseDto;
import com.insrb.micro.api.domain.dto.response.MydataInsuranceApiResponseDto;
import com.insrb.micro.api.domain.dto.response.TripBojangResponseDto;
import com.insrb.micro.api.domain.entity.DomesticTourApi;
import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.DomesticTourApiRepository;
import com.insrb.micro.api.repository.MydataInsuranceApiRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.insrb.micro.api.repository.TripBojangRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class DomesticTourApiService {

    private final DomesticTourApiRepository domesticTourApiRepository;
    private final TripBojangRepository tripBojangRepository;
    private final TokenProvider tokenProvider;

    @Transactional
    public long domesticTourSave(DomesticTourApiReq params) {
        DomesticTourApi entity = domesticTourApiRepository.save(params.toEntity());

        if (entity == null) {
            throw new CustomException(ErrorCode.FAIL_NOT_SAVE);
        }

        return entity.getId();
    }

    public List<DomesticTourApiResponseDto> domesticTourList() {
        long userId = tokenProvider.getAutId();

        return domesticTourApiRepository.findAllByUserIdAndDeleteYnOrderByCreatedDateDesc(userId, 'N')
                .stream().map(domesticTourApi ->
                        new DomesticTourApiResponseDto(domesticTourApi, mappingToGubun(domesticTourApi.getGubun()))
                )
                .collect(Collectors.toList());
    }

    @Transactional
    public Boolean deleteDomesticTour(long domesticTourId) {
        long userId = tokenProvider.getAutId();

        Optional<DomesticTourApi> findDomesticTour = domesticTourApiRepository.findByIdAndUserIdAndDeleteYn(domesticTourId, userId, 'N');

        if (findDomesticTour.isEmpty()) {
            throw new CustomException(ErrorCode.FAIL_NOT_DELETE);
        }

        if ("N".equals(findDomesticTour.get().getBeforePayment())) {
            throw new CustomException(ErrorCode.FAIL_NOT_DELETE);
        }

        findDomesticTour.get().delete();
        domesticTourApiRepository.save(findDomesticTour.get());
        return Boolean.TRUE;
    }

    private List<TripBojangResponseDto> mappingToGubun(char gubun) {
        return tripBojangRepository.findBybFlag(gubun)
                .stream()
                .map(TripBojangResponseDto::new)
                .collect(Collectors.toList());

    }

}
