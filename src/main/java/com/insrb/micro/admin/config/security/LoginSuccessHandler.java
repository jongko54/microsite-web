package com.insrb.micro.admin.config.security;

import com.insrb.micro.admin.domain.entity.JoinLog;
import com.insrb.micro.admin.repository.JoinLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;

import static com.insrb.micro.utils.CommonUtils.*;

@Component
@RequiredArgsConstructor
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    private final JoinLogRepository joinLogRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        String userId = authentication.getName();

        JoinLog joinLog = joinLogRepository.save(
                JoinLog.builder()
                        .userId(userId)
                        .joinDate(LocalDateTime.now())
                        .task("일반")
                        .joinIp(getClientIp(request))
                        .build()
        );

        response.sendRedirect("/admin/main");
    }
}
