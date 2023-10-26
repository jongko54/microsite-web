package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto;
import com.insrb.micro.api.service.MydataUserApiService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/public")
@Api(tags = "mydataUser(마이데이터 유저 리스트)")
@RequiredArgsConstructor
@RestController
public class MydataUserApiController {

  private final MydataUserApiService mydataUserApiService;

  @Operation(summary = "회원 저장", tags = "mydataUser API")
  @PostMapping(value = "/mydataUserSave") //RequestParam("id") long id,
  public ApiResponse mydataUserSave(@RequestBody MydataUserApiRequestDto.MydataUserApiReq params){

    return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, mydataUserApiService.userSave(params));
  }
}
