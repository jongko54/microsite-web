package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.domain.dto.request.DomesticTourApiRequestDto;
import com.insrb.micro.api.service.DomesticTourApiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


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

    @ApiOperation(value = "국내여행자 보험 가입 내역 호출")
    @GetMapping(value = "/domesticTourList")
    public ApiResponse domesticTourList() {
        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_BOARD, domesticTourApiService.domesticTourList());
    }

    @ApiOperation(value = "선택한 보험 삭제")
    @DeleteMapping(value = "/domesticTourDelete/{id}")
    public ApiResponse domesticTourDelete(@PathVariable long id ) {
        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, domesticTourApiService.deleteDomesticTour(id));
    }

}
