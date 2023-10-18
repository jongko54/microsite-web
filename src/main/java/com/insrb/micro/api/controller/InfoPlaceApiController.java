package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.service.InfoPlaceApiService;
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
@Api(tags = "infoPlace(정보마당)")
@RequiredArgsConstructor
@RestController
public class InfoPlaceApiController {

    private final InfoPlaceApiService infoPlaceApiService;

    @ApiOperation(
            value = "정보마당 글 목록",
            notes = "파라미터 = title=대출 추후 영어로 값 바꾸는게 나을듯"
    )
    @GetMapping(path = "/infoPlaceList")
    public ApiResponse infoPlaceList(@RequestParam(required = false) String title){

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_BOARD, infoPlaceApiService.infoPlaceList(title));
    }

    @ApiOperation(
            value = "정보마당 글 상세보기"
    )
    @GetMapping(path = "/infoPlaceDetail")
    public ApiResponse infoPlaceDetail(@RequestParam(required = false) String id){

        long param = Long.parseLong(id);

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_BOARD, infoPlaceApiService.infoPlaceDetail(param));
    }


}
