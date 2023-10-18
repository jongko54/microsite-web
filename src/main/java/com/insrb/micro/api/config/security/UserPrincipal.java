package com.insrb.micro.api.config.security;


import io.jsonwebtoken.Claims;
import lombok.Data;

@Data
public class UserPrincipal {


    private Long id;

    private String userId;

    public UserPrincipal(Claims claims){
        this.id = Long.valueOf(claims.get("id").toString());
        this.userId = claims.getSubject();
    }

}
