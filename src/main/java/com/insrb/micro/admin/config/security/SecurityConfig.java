package com.insrb.micro.admin.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.encrypt.AesBytesEncryptor;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableWebSecurity
@RequiredArgsConstructor
@Order(1)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  private final LoginValidtor loginValidtor;
  private final LoginSuccessHandler successHandler;
  private final LogoutSuccessHandler logoutSuccessHandler;


    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .antMatcher("/admin/**")    // admin으로 들어오는 url 요청은 이 시큐리티 설정으로 적용한다
                .authorizeRequests()
                .anyRequest().authenticated()   //모든 url 요청은 인증이 필요함
                .and()
                    .formLogin()                        //form 방식 로그인을 사용할 것임
                    .loginPage("/admin/login")  //커스텀 로그인 페이지
                    .loginProcessingUrl("/admin/loginProc")  //form에 action url
                    .usernameParameter("id")    //사용자 아이디 (input 태그에 name값으로 받음)
                    .passwordParameter("pw")    //사용자 비밀번호 (input 태그에 name값으로 받음)
                    .successHandler(successHandler)
//                    .defaultSuccessUrl("/admin/main",true) // 로그인 성공 했을 시 이동할 화면
                    .permitAll()
                .and()
                    .logout()
                    .addLogoutHandler(logoutSuccessHandler)
//                    .logoutSuccessHandler(());
                    .logoutRequestMatcher(new AntPathRequestMatcher("/admin/logoutProc"));//로그아웃 url

    }

    /**
     * 모든 url허용을 금지했기 때문에 css, js, img 파일등은 허용 시켜주는 메소드
     * @param web
     * @throws Exception
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/js/**", "/css/**", "/img/**", "/frontend/**","/vendor/**","/scss/**");
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(loginValidtor).passwordEncoder(new BCryptPasswordEncoder());
//        auth.authenticationProvider(customAuthenticationProvider());
    }


}
