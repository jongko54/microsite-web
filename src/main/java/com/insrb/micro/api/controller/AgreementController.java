package com.insrb.micro.api.controller;


import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.domain.dto.response.AgreementResponseDto;
import com.insrb.micro.api.service.AgreementService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 약관동의 컨트롤러
 */
@Slf4j
@RestController
@RequestMapping("/api/public")
@Api(tags = "agreement(약관동의)")
@RequiredArgsConstructor
public class AgreementController {

    private final AgreementService agreementService;

    @ApiOperation(value = "약관동의 리스트")
    @GetMapping("/agreement")
    public ApiResponse agreementList(){

        List<AgreementResponseDto> responseDto = agreementService.agreementList();

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_BOARD, responseDto);
    }

}
