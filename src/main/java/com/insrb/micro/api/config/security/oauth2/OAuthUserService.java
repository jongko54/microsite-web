package com.insrb.micro.api.config.security.oauth2;

import com.insrb.micro.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@RequiredArgsConstructor
@Service
public class OAuthUserService implements org.springframework.security.oauth2.client.userinfo.OAuth2UserService<OAuth2UserRequest, OAuth2User> {


    private final UserRepository userRepository;

    /**
     * 유저 정보를 가져온 메소드
     * @param userRequest the user request 유저 정보
     * @return DefaultOAuth2User
     * @throws OAuth2AuthenticationException
     */
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
//        OAuth2User oAuth2User = super.loadUser(userRequest);

        org.springframework.security.oauth2.client.userinfo.OAuth2UserService delegate = new DefaultOAuth2UserService();

        OAuth2User oAuth2User = delegate.loadUser(userRequest); //OAuth (카카오, 네이버, 구글 등) 사용자 정보를 담고있음

        String registrationId = userRequest.getClientRegistration().getRegistrationId(); //OAuth 서비스 이름(ex kakao, naver)

        String userNameAttributeName = userRequest.getClientRegistration()
                                                  .getProviderDetails()
                                                  .getUserInfoEndpoint()
                                                  .getUserNameAttributeName();  //OAuth 로그인시 키(pk)가 되는값


        log.info("registrationId = {}", registrationId);
        log.info("userNameAttributeName = {}", userNameAttributeName);

        Map<String, Object> attributes = oAuth2User.getAttributes(); //OAuth 서비스 유저 정보



        // registrationId에 따라 공통된 유저 정보 객체를 만들어 준다
        OAuthUserProfileDto userProfile = OAuthAttributes.extract(registrationId, attributes);
        userProfile.setProvider(registrationId);


        Map<String, Object> customAttribute = coustomAttribute(attributes, userNameAttributeName, userProfile, registrationId);



        return new DefaultOAuth2User(
                Collections.singleton(new SimpleGrantedAuthority("ROEL_USER")),
                customAttribute, userNameAttributeName
        );
    }

    /**
     * coustomAttribute를 반환하는 이유는 oAuth2User.getAttributes()에서 받아온 정보들은 unmodifableMap이다.
     * 정보를 수정할 수 없는 Map이기 떄문에 attribute.put("provider", registrationId)를 하려면 수정할 수 없다며 Exception이 발생하게 됨.
     * @param attributes 속성(이름, 이메일 등)
     * @param userNameAttributeName 사용자 이름
     * @param userProfile
     * @param registrationId
     * @return Map
     */
    private Map coustomAttribute(Map attributes, String userNameAttributeName,
                                 OAuthUserProfileDto userProfile, String registrationId){
        Map<String, Object> customeAttribute = new LinkedHashMap<>();
        customeAttribute.put(userNameAttributeName, "신규가입");
        customeAttribute.put("provider", registrationId);
        customeAttribute.put("name", userProfile.getName());
        customeAttribute.put("email", userProfile.getEmail());
        customeAttribute.put("phone", userProfile.getPhone());

        return customeAttribute;
    }



}
