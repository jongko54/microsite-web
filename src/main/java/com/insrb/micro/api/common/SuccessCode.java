package com.insrb.micro.api.common;


import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum SuccessCode{

    /*
     * 400 BAD_REQUEST: 잘못된 요청
     */
    SUCCESS_BOARD(HttpStatus.OK, "게시글을 성공적으로 불러왔습니다."),

    SUCCESS_JOIN(HttpStatus.OK, "회원가입이 완료 되었습니다."),

    SUCCESS_LOGIN(HttpStatus.OK, "로그인이 완료 되었습니다."),

    SUCCESS_CHECK(HttpStatus.OK, "중복확인이 완료 되었습니다."),

    SUCCESS_OK(HttpStatus.OK, "정상처리 되었습니다."),

    SUCCESS_AUTH_MOBILE(HttpStatus.OK, "인증이 완료 되었습니다."),

    SUCCESS_PASSWORD_UPDATE(HttpStatus.OK, "비밀번호 변경이 완료 되었습니다."),

    SUCCESS_CONSULTING_APPLICATION(HttpStatus.OK, "상담신청이 완료 되었습니다."),
    ;

    private final HttpStatus status;
    private final String message;
}
