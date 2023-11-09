package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto;
import com.insrb.micro.api.domain.dto.request.MydataUserApiRequestDto.MydataUserApiReq;
import com.insrb.micro.api.service.MydataUserApiService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/public")
@Api(tags = "mydataUser(마이데이터 유저 리스트)")
@RequiredArgsConstructor
@RestController
public class MydataUserApiController {

    private final MydataUserApiService mydataUserApiService;

    @GetMapping(path = "/mydataUser")
    public ApiResponse mydataUserList(@RequestParam(required = false) long id) {

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_BOARD, mydataUserApiService.mydataUserList(id));
    }

    @Operation(summary = "회원 저장", tags = "mydataUser API")
    @PostMapping(value = "/mydataUserSave") //RequestParam("id") long id,
    public ApiResponse mydataUserSave(@RequestBody MydataUserApiRequestDto.MydataUserApiReq params) {

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, mydataUserApiService.userSave(params));
    }

    @ResponseBody
    @PutMapping(path = "/mydataUserUpdate")
    public ApiResponse mydataUserUpdate(@RequestBody final MydataUserApiReq params) {

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, mydataUserApiService.mydataUserUpdate(params));
    }

    //중복 확인
    @PostMapping(path = "/mydataUser/exists")
    public ApiResponse mydataUserCheck(@NotNull @RequestBody final MydataUserApiReq params) {

        String userName = params.getUserName();
        String phoneRole = params.getPhoneRole();

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_CHECK, mydataUserApiService.mydataUserCheck(userName, phoneRole));
    }
}
