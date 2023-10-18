package com.insrb.micro.api.controller;


import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.domain.dto.request.ConsultingRequestDto;
import com.insrb.micro.api.service.ConsultingApiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "consulting(상담신청)")
@RestController
@RequestMapping(path = "/api/public")
@Slf4j
@RequiredArgsConstructor
public class ConsultingApiController {

    private final ConsultingApiService consultingApiService;

    @ApiOperation(value = "상담신청")
    @PostMapping(path = "/consulting")
    public ApiResponse consulting(@RequestBody ConsultingRequestDto params){

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_CONSULTING_APPLICATION, consultingApiService.consultingRegi(params));
    }

}
