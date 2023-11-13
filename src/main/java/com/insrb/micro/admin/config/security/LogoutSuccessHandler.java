package com.insrb.micro.admin.config.security;

import com.insrb.micro.admin.domain.entity.JoinLog;
import com.insrb.micro.admin.repository.JoinLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class LogoutSuccessHandler implements LogoutHandler {

    private final JoinLogRepository joinLogRepository;

    @Transactional
    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication)  {

        String userId = authentication.getName();

        JoinLog entity = joinLogRepository.findTopByUserIdOrderByJoinDateDesc(userId).orElseThrow(()-> new RuntimeException());

        entity.logoutDateUpdate(LocalDateTime.now());
    }
}
