package com.insrb.micro.api.common;

import com.insrb.micro.api.exception.ErrorCode;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@ApiModel(value = "ApiResponse <공통 응답 포맷>")
@Getter
@AllArgsConstructor
public class ApiResponse<T> {

    private final int status;
    private final String error;
    private final String code;
    private final String message;
    private final T data;


    @Builder
    public ApiResponse(SuccessCode successCode, T data) {
        this.status = successCode.getStatus().value();
        this.error = null;
        this.code = successCode.name();
        this.message = successCode.getMessage();
        this.data = data;
    }

    public static <T> ApiResponse<T> success(SuccessCode successCode, T data){
        return new ApiResponse<>(successCode, data);
    }



//    public ApiResponse(int status, String code, String message, T data) {
//        this.status = status;
//        this.error = null;
//        this.code = code;
//        this.message = message;
//        this.data = null;
//    }


}
