package com.insrb.micro.api.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;


/**
 * 예외를 공통으로 관리하기 위한 enum 클래스
 */
@Getter
@AllArgsConstructor
public enum ErrorCode{

    /*
     * 400 BAD_REQUEST: 잘못된 요청
     */
    BAD_REQUEST(HttpStatus.BAD_REQUEST, "잘못된 요청입니다."),

    /*
     * 404 NOT_FOUND: 리소스를 찾을 수 없음
     */
    POSTS_NOT_FOUND(HttpStatus.NOT_FOUND, "게시글 정보를 찾을 수 없습니다."),

    /*
     * 405 METHOD_NOT_ALLOWED: 허용되지 않은 Request Method 호출
     */
    METHOD_NOT_ALLOWED(HttpStatus.METHOD_NOT_ALLOWED, "허용되지 않은 메서드입니다."),

    /*
     * 500 INTERNAL_SERVER_ERROR: 내부 서버 오류
     */
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "내부 서버 오류입니다."),

    /*
     * 404 INTERNAL_SERVER_ERROR: 회원가입 실패
     */
    FAIL_JOIN(HttpStatus.NOT_FOUND, "회원가입을 실패하였습니다."),


    /*
     * 400 BAD_REQUEST: 비밀번호 불일치
     */
    PASSWORD_NOT_EQUALS(HttpStatus.BAD_REQUEST, "비밀번호가 일치하지 않습니다"),

    /*
     * 404 NOT_FOUND: 사용자를 찾을수 없음
     */
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "사용자 정보를 찾을수 없습니다."),


    /*
     * 400 BAD_FOUND: 처리중 오류
     */
    FAIL_SMS(HttpStatus.BAD_REQUEST, "처리 중 오류가 발생했습니다."),

    /*
     * 400 BAD_FOUND: 처리중 오류
     */
    FAIL_AUTH_MOBILE(HttpStatus.BAD_REQUEST, "인증번호가 일치하지 않습니다."),

    FAIL_TIME_MOBILE(HttpStatus.BAD_REQUEST, "인증번호 시간이 만료 되었습니다."),

    FAIL_EMAIL_DUP(HttpStatus.BAD_REQUEST, "이미 사용 중인 이메일입니다."),

    FAIL_NOT_SAVE(HttpStatus.BAD_REQUEST, "저장 실패 하였습니다.")
    ;


    private final HttpStatus status;
    private final String message;
}
