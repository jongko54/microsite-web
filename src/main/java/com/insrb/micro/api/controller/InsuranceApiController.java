package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.service.InsuranceApiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/public")
@Api(tags = "Insurance(보험 리스트)")
@RequiredArgsConstructor
@RestController
public class InsuranceApiController {

  private final InsuranceApiService insuranceApiService;

  @ApiOperation(
      value = "보험리스트",
      notes = "파라미터 = id"
  )
  @GetMapping(path = "/insuranceList")
  public ApiResponse insuranceList(@RequestParam(required = false) String id){

    return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_BOARD, insuranceApiService.insuranceList(id));
  }
}
