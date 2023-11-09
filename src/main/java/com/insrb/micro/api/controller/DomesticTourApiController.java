package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.domain.dto.request.DomesticTourApiRequestDto;
import com.insrb.micro.api.domain.dto.request.SimpleCalcApiRequestDto;
import com.insrb.micro.api.service.DomesticTourApiService;
import com.insrb.micro.api.service.SimpleCalcApiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RequestMapping("/api/public")
@Api(tags = "DomesticTour(국내여행자 보험 가입)")
@RequiredArgsConstructor
@RestController
public class DomesticTourApiController {

    private final DomesticTourApiService domesticTourApiService;

    @ApiOperation(value = "국내여행자 보험 가입")
    @PostMapping(value = "/domesticTourSave")
    public ApiResponse DomesticTour(@RequestBody DomesticTourApiRequestDto.DomesticTourApiReq params) {

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, domesticTourApiService.domesticTourSave(params));
    }

}
