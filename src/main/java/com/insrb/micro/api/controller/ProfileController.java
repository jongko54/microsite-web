package com.insrb.micro.api.controller;


import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import com.insrb.micro.api.config.security.jwt.TokenProvider;
import com.insrb.micro.api.domain.dto.request.PhoneUpdateRequestDto;
import com.insrb.micro.api.domain.dto.request.ProfileUpdateRequestDto;
import com.insrb.micro.api.domain.dto.request.PwdUpdateRequestDto;
import com.insrb.micro.api.service.ProfileService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Api(tags = "profile(내 정보)")
@Slf4j
@RequestMapping("/api/private")
@RestController
@RequiredArgsConstructor
public class ProfileController {


    private final TokenProvider tokenProvider;
    private final ProfileService profileService;

    @ApiOperation(value = "내정보 조회")
    @GetMapping(path = "/profile")
    public ApiResponse myProfile(){

        long id = tokenProvider.getAutId();

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, profileService.myProfile(id));
    }

    @ApiOperation(
            value = "비밀번호 수정")
    @PutMapping(path = "/pwdUpdate")
    public ApiResponse passwordUpdate(@RequestBody PwdUpdateRequestDto pwdUpdateRequestDto){

        long id = tokenProvider.getAutId();

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_PASSWORD_UPDATE, profileService.passwordUpdate(id, pwdUpdateRequestDto));
    }

    @ApiOperation(
            value = "휴대폰번호 수정"
    )
    @PutMapping(path = "/phoneUpdate")
    public ApiResponse phoneUpdate(@RequestBody PhoneUpdateRequestDto phoneUpdateRequestDto){

        long id = tokenProvider.getAutId();

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, profileService.phoneUpdate(id, phoneUpdateRequestDto));
    }
    
    @ApiOperation(value = "프로필 수정")
    @PutMapping(path = "/profileUpdate")
    public ApiResponse profileUpdate(@RequestBody ProfileUpdateRequestDto params){

        long id = tokenProvider.getAutId();

        return ResponseUtil.SUCCESS(SuccessCode.SUCCESS_OK, profileService.profileUpdate(id, params));
    }

}
