package com.insrb.micro.api.service;

import com.insrb.micro.api.domain.dto.request.SimpleCalcApiRequestDto.SimpleCalcApiReq;
import com.insrb.micro.api.domain.dto.response.SimpleCalcApiResponseDto;
import com.insrb.micro.api.domain.dto.response.TripBojangResponseDto;
import com.insrb.micro.api.domain.entity.SimpleCalc;
import com.insrb.micro.api.domain.entity.TripBojang;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.SimpleCalcApiRepository;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.stream.Collectors;

import com.insrb.micro.api.repository.TripBojangRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static java.util.stream.Collectors.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class SimpleCalcApiService {

    private final SimpleCalcApiRepository simpleCalcApiRepository;
    private final TripBojangRepository tripBojangRepository;

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
    public List<SimpleCalcApiResponseDto> simpleCalcList(String age, char sex, int period) {
        Map<Character, SimpleCalc> simpleCalcMap = simpleCalcApiRepository.findByAgeAndSexAndPeriodGreaterThanEqual(age, sex, period)
                .stream()
                .collect(toMap(SimpleCalc::getGubun, Function.identity(), BinaryOperator.minBy(Comparator.comparing(SimpleCalc::getPeriod))));

        return simpleCalcMap.values().stream().map(
                        simpleCalc -> new SimpleCalcApiResponseDto(simpleCalc, mappingToGubun(simpleCalc.getGubun())))
                .collect(toList());
    }


    private List<TripBojangResponseDto> mappingToGubun(char gubun) {
        return tripBojangRepository.findBybFlagOrderByCategoryAscOrderAsc(gubun)
                .stream()
                .map(TripBojangResponseDto::new)
                .collect(toList());

    }
}
