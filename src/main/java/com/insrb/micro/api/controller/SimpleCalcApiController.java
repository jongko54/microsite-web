package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.service.SimpleCalcApiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/public")
@Api(tags = "SimpleCalcSave(국내 여행자 보험)")
@RequiredArgsConstructor
@RestController
public class SimpleCalcApiController {

  private final SimpleCalcApiService simpleCalcApiService;

//  @Operation(summary = "국내여행자 보험 간편 계산", tags = "simpleCalcSave API")
//  @PostMapping(value = "/simpleCalcSave") //RequestParam("id") long id,
//  public ApiResponse SimpleCalcSave(@RequestBody SimpleCalcApiRequestDto.SimpleCalcApiReq params){
//
//    return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, simpleCalcApiService.simpleCalSave(params));
//  }

  @GetMapping(value = "/simpleCalcList")
  @ApiOperation(value = "국내여행자 보험 든든플랜,안심플랜 보험금 계산")
  @ApiImplicitParams({
          @ApiImplicitParam(name = "age", value = "나이", required = true),
          @ApiImplicitParam(name = "sex", value = "성별", required = true),
          @ApiImplicitParam(name = "period", value = "기간", required = true)
  })
  public ApiResponse SimpleCalcList(
      @RequestParam("age") String age,
      @RequestParam("sex") char sex,
      @RequestParam("period") String period) {

    return ResponseUtil
        .SUCCESS(SuccessCode.SUCCESS_OK, simpleCalcApiService.simpleCalcList(age, sex, period));

  }
}
