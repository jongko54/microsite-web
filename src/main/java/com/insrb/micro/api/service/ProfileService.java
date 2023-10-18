package com.insrb.micro.api.service;


import com.insrb.micro.api.common.Utils;
import com.insrb.micro.api.domain.dto.request.PhoneUpdateRequestDto;
import com.insrb.micro.api.domain.dto.request.ProfileUpdateRequestDto;
import com.insrb.micro.api.domain.dto.request.PwdUpdateRequestDto;
import com.insrb.micro.api.domain.dto.response.ProfileResponseDto;
import com.insrb.micro.api.domain.dto.response.UserResponseDto;
import com.insrb.micro.api.domain.entity.InsuAgentApi;
import com.insrb.micro.api.domain.entity.Sms;
import com.insrb.micro.api.domain.entity.User;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import com.insrb.micro.api.repository.InsuAgentApiRespository;
import com.insrb.micro.api.repository.SmsRepository;
import com.insrb.micro.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProfileService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final SmsRepository smsRepository;
    private final InsuAgentApiRespository insuAgentApiRespository;

    @Transactional
    public ProfileResponseDto myProfile(long id){

        User entity = userRepository.findByMyprofile(id);


        return new ProfileResponseDto(entity);
    }

    @Transactional
    public String profileUpdate(long id , ProfileUpdateRequestDto params){


        InsuAgentApi insuAgentApi = insuAgentApiRespository.findAllByInsuId(params.getInsuId()).orElseThrow(()-> new CustomException(ErrorCode.USER_NOT_FOUND));
        User entity = userRepository.findById(id).orElseThrow(()-> new CustomException(ErrorCode.USER_NOT_FOUND));

        String name = entity.profileUpdate(params.getUserName(), insuAgentApi, params.getAddress(), params.getAddress_detail()).getUserName();


        return name;
    }

    @Transactional
    public long passwordUpdate(long id, PwdUpdateRequestDto pwdUpdateRequestDto) {
        User entity = userRepository.findById(id).orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
        String input_pwd = pwdUpdateRequestDto.getUserPw();

        //기존 비밀번호와 비교
        if(!passwordEncoder.matches(input_pwd, entity.getUserPw())){
            throw new CustomException(ErrorCode.PASSWORD_NOT_EQUALS);
        }

        //비밀번호 암호화
        String new_encoding_pwd = passwordEncoder.encode(pwdUpdateRequestDto.getNewUserPw());

        //업데이트
        long user_seq = entity.userPwUpdate(new_encoding_pwd).getId();

        //업데이트가 완료 안됐으면 예외처리
        if(user_seq != id){
            throw new CustomException(ErrorCode.BAD_REQUEST);
        }

        return user_seq;
    }

    @Transactional
    public String phoneUpdate(long id, PhoneUpdateRequestDto phoneUpdateRequestDto) {
        Sms smsYn = smsRepository.findByMessageId(phoneUpdateRequestDto.getMessageId()).orElseThrow(()-> new CustomException(ErrorCode.FAIL_SMS));

        //인증이 완료되지 않았을때 예외발생
        if(smsYn.getAuthYn() != 'Y'){
            throw new CustomException(ErrorCode.FAIL_SMS);
        }

        //인증번호 시간이 만료되었을때 예외발생
        if(!Utils.getAuthTimeDiff(smsYn.getSendDate())){
            throw new CustomException(ErrorCode.FAIL_TIME_MOBILE);
        }

        User user = userRepository.findById(id).orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));

        String phoneRole = user.userPhoneUpdate(phoneUpdateRequestDto.getPhoneRole()).getPhoneRole();


        return phoneRole;
    }
}
