package com.insrb.micro.api.exception;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ErrorResponse<T> {

    private final int status;
    private final String error;
    private final String code;
    private final String message;
    private final T data;

    public ErrorResponse(ErrorCode errorCode) {
        this.status = errorCode.getStatus().value();
        this.error = errorCode.getStatus().name();
        this.code = errorCode.name();
        this.message = errorCode.getMessage();
        this.data = null;
    }

}