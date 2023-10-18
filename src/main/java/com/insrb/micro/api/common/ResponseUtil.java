package com.insrb.micro.api.common;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ResponseUtil {


    public static <T> ApiResponse<T> SUCCESS(SuccessCode successCode, T data){
        return new ApiResponse<>(successCode, data);
    }
}
