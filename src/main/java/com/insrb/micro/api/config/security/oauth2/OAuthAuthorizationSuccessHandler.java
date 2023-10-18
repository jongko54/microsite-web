package com.insrb.micro.api.config.security.oauth2;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.insrb.micro.admin.repository.CommunityRepository;
import com.insrb.micro.api.config.security.jwt.TokenProvider;
import com.insrb.micro.api.domain.dto.response.TokenInfo;
import com.insrb.micro.api.domain.entity.User;
import com.insrb.micro.api.repository.UserRepository;
import com.insrb.micro.api.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.Optional;

/**
 * 로그인 성공 시 처리 할 로직
 * 리다이렉트, 토큰 발급 등
 */
@Component
@Slf4j
@RequiredArgsConstructor
public class OAuthAuthorizationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler{

    private final UserRepository userRepository;
    private final TokenProvider tokenProvider;
    private final ObjectMapper objectMapper;
    private final CommunityRepository communityRepository;
    private final UserService userService;


    @Override
    @Transactional
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response ,
                                        Authentication authentication) throws IOException {

        String targetUrl;

        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        OAuthUserProfileDto userProfileDto = new OAuthUserProfileDto();
        userProfileDto.setName((String)oAuth2User.getAttributes().get("name"));
        userProfileDto.setEmail((String)oAuth2User.getAttributes().get("email"));
        userProfileDto.setProvider((String)oAuth2User.getAttributes().get("provider"));
        userProfileDto.setPhone((String)oAuth2User.getAttributes().get("phone"));

        System.out.println(userProfileDto.toString());

       //계정이 없으면 사용자를 DB에 저장하는 함수
       User selectUser = userSaveOrUpdate(userProfileDto);


       //로그인타입이 같지않으면 이미 존재하는 유저이므로 실패 페이지로 리다이렉트
       if(!selectUser.getLoginType().equals(userProfileDto.getProvider())){
           //이미 아이디가 존재한다는 페이지로 리다이렉트 함수 (리액트)
           failLoginRedirect(request, response, selectUser);
           return;
       }

        //정상적인 로그인이면 토큰 발급
        TokenInfo token = tokenProvider.generateToken(userProfileDto.getEmail(), selectUser.getId());

        //로그인 성공 시 페이지로 리다이렉트 함수
        successLoginRedirect(request, response, userProfileDto, token);
    }

    public User userSaveOrUpdate(OAuthUserProfileDto userProfileDto){

        Optional<User> user = userRepository.findByUserId(userProfileDto.getEmail());


        if(user.isEmpty()){
            log.info("신규 가입자 : {}", userProfileDto.getEmail());
            System.out.println(userProfileDto.getPhone());
            var phone = userProfileDto.getPhone();
            userService.kakaoAPI(phone, userProfileDto.getPhone());

            //계정이 없으면 insert 처리 후 로그인 *약관동의를 받아야하면 약관동의화면으로 리다이렉트 시켜야할듯 그 후 로직은 고민 필요


            return userRepository.save(userProfileDto.toEntity());
        }


        if(userProfileDto.getProvider().equals(user.get().getLoginType())){
//            계정이 있을때 같은 provider(naver, kakao)로 들어오면 업데이트
//            *닉네임 등을 사용자가 변경 했을수도 있기때문에
            user.map(m-> m.userNameUpdate(userProfileDto.getName()));

        }

            return user.get();
    }


    public void successLoginRedirect(HttpServletRequest request, HttpServletResponse response, OAuthUserProfileDto userProfileDto, TokenInfo token) throws IOException{
        log.info("계정정보가 일치하여 로그인 합니다.");
        log.info("요청 주소 리다이렉트:{}", request.getServerName());


        String serverName = request.getServerName();

        if(serverName.equals("localhost") || serverName.equals("210.179.175.147")){
            serverName = request.getServerName() + ":3000";
        }

        String scheme = request.getScheme();

        String redirectUrl = scheme +"://"+ serverName;

        String encodingName = URLEncoder.encode(userProfileDto.getName(), "UTF-8");
        String loginCode = "success";

        String url = UriComponentsBuilder.fromUriString(redirectUrl+"/login")
                .queryParam("token",token.getAccessToken())
                .queryParam("name",encodingName)
                .queryParam("loginCode",loginCode)
                .build().toUriString();

        getRedirectStrategy().sendRedirect(request,response,url);

    }


    private void failLoginRedirect(HttpServletRequest request, HttpServletResponse response, User selectUser) throws IOException{
        log.info("이미 존재하는 아이디");
        log.info("요청 주소 리다이렉트:{}", request.getServerName());


        String serverName = request.getServerName();

        if(serverName.equals("localhost") || serverName.equals("210.179.175.147")){
            serverName = request.getServerName() + ":3000";
        }

        String scheme = request.getScheme();

        String redirectUrl = scheme +"://"+ serverName;


        String loginCode = "fail";
        String loginType = selectUser.getLoginType();

        String url = UriComponentsBuilder.fromUriString(redirectUrl+"/login")
                .queryParam("loginCode",loginCode)
                .queryParam("type",loginType)
                .build().toUriString();

        getRedirectStrategy().sendRedirect(request,response,url);
    }

}
