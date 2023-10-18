package com.insrb.micro.api.controller;


import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.domain.dto.response.SmsResponseDto;
import com.insrb.micro.api.service.SmsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Api(tags = "sms(휴대폰인증)")
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/public")
public class SmsController {

    private final SmsService smsService;


    @ApiOperation(
            value = "인증번호 요청",
            notes = "파라미터 = 사용자 휴대폰 번호 '-'없이 \n" +
                    "\n mobile : 01012345678 "
    )
    @PostMapping(path = "/sms_send")
    public ApiResponse smsSend(@RequestBody Map<String, String> param){

        String mobile = param.get("mobile");

        SmsResponseDto responseDto= smsService.smsSend(mobile);

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, responseDto);
    }

    @ApiOperation(
            value = "전송한 인증번호 확인",
            notes = "파라미터 = 메세지id, 인증번호 "
    )
    @GetMapping(path = "/sms_check")
    public ApiResponse smsCheck(@RequestParam String messageId, @RequestParam String authKey){

        String sendTo = smsService.smsCheck(messageId, authKey);

        Map<String, String> data = new HashMap<>();

        data.put("message_to", sendTo);

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_AUTH_MOBILE, data);
    }

}
