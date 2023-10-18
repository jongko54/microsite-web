package com.insrb.micro.api.controller;

import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.service.CommunityApiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/public")
@Api(tags = "community(커뮤니티)")
@RequiredArgsConstructor
@RestController
public class CommunityApiController {


    private final CommunityApiService communityApiService;

    @ApiOperation(
            value = "커뮤니티 글 목록",
            notes = "파라미터 = category=대출 추후 영어로 값 바꾸는게 나을듯"
    )
    @GetMapping(path = "/communityList")
    public ApiResponse communityList(@RequestParam(required = false) String category){


        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_BOARD, communityApiService.communityList(category));
    }

    @ApiOperation(
            value = "커뮤니티 글 상세보기"
    )
    @GetMapping(path = "/communityDetail")
    public ApiResponse communityDetail(@RequestParam(required = false) String id){

        long param = Long.parseLong(id);

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_BOARD, communityApiService.communityDetail(param));
    }

}


