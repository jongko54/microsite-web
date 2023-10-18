package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.service.InsuAgentApiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Api(tags = "설계사 추천인")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/private")
@Slf4j
public class InsuAgentApiController {

    private final InsuAgentApiService insuAgentApiService;

    @ApiOperation(value = "설계사 목록")
    @GetMapping("/insuList")
    public ApiResponse insuList(){

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK,insuAgentApiService.insuList());
    }


}
