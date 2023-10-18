package com.insrb.micro.admin.config.jpa;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

@Configuration
public class AuditConfig implements AuditorAware<String> {


    @Override
    public Optional<String> getCurrentAuditor() {
        //세션에 들어있는 사용자 id를 가지고 오면 됨
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userName;

        if (authentication == null) {
            userName = "관리자";
        } else if (authentication.getName().equals("anonymousUser")) {
            userName = "신규가입";
        }else {
            userName = "사용자";
        }

        return Optional.of(userName);
    }
}
