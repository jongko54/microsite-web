package com.insrb.micro.api.config.security;


import com.insrb.micro.api.config.security.jwt.*;
import com.insrb.micro.api.config.security.oauth2.OAuthAuthorizationSuccessHandler;
import com.insrb.micro.api.config.security.oauth2.OAuthUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

@RequiredArgsConstructor
@Order(2)
@Configuration
public class UserSecurityConfig extends WebSecurityConfigurerAdapter {

    private final OAuthUserService oAuthUserService;

    private final OAuthAuthorizationSuccessHandler oAuthAuthorizationSuccessHandler;

    private final TokenProvider tokenProvider;

    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    private final CorsFilter corsFilter;


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                    .antMatcher("/api/**")       // api로 들어오는 url은 이 시큐리티 설정을 적용한다
                    .httpBasic().disable()
                    .csrf().disable()
                    .addFilter(corsFilter)
                    .exceptionHandling()
                    .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                    .accessDeniedHandler(jwtAccessDeniedHandler);

        http
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS); // jwt를 사용하기 때문에 세션 사용안함

        http
                    .formLogin().disable()      //폼 로그인 방식 사용 안함
                    .authorizeRequests()
                    .antMatchers("/api/oauth2/**","/api/public/**").permitAll()
                    .anyRequest().authenticated();
        http
                    .oauth2Login()  // oauth2 로그인 설정
                    .authorizationEndpoint()
                    .baseUri("/api/oauth2/authorization")   //oauth2로 들어오는 요청을 처리하기 위해 베이스 url 통일
                .and()
                     .redirectionEndpoint()
                    .baseUri("/api/oauth2/callback/**")    //oauth2로 들어오는 요청을 처리하기 위해 리다이렉트 url 통일
                .and()
                    .userInfoEndpoint()
                    .userService(oAuthUserService)  //사용자 정보를 처리해주는 설정 (DB 확인 및 저장)
                .and()
                    .successHandler(oAuthAuthorizationSuccessHandler);//로그인이 성공했을때 처리해주는 설정(리다이렉트, 토큰 발급 등)

        http
                .addFilterBefore(new JwtFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class);
    }

//    @Override
//    public void configure(WebSecurity web){
//        web
//                .ignoring()
//                .antMatchers("/oauth2/**");
//    }
}
