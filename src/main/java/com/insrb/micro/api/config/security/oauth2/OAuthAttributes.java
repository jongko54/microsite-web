package com.insrb.micro.api.config.security.oauth2;


import com.insrb.micro.api.common.Utils;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;

public enum OAuthAttributes {

    NAVER("naver", (attributes)->{
        Map<String, Object> response = (Map<String, Object>)attributes.get("response");
        OAuthUserProfileDto userProfileDto = new OAuthUserProfileDto();
        userProfileDto.setName((String)response.get("name"));
        userProfileDto.setEmail((String)response.get("email"));
        userProfileDto.setPhone(Utils.getStringToPhoneNumber((String)response.get("mobile")));

        return userProfileDto;
    }),

    KAKAO("kakao", (attributes)->{
        Map<String, Object> kakaoAccount = (Map<String, Object>)attributes.get("kakao_account");
        Map<String, Object> kakaoName = (Map<String, Object>)kakaoAccount.get("profile");

        OAuthUserProfileDto userProfileDto = new OAuthUserProfileDto();
        userProfileDto.setName((String)kakaoName.get("nickname"));
        userProfileDto.setEmail((String)kakaoAccount.get("email"));

        return userProfileDto;
    });


    private final String registrationId;
    private final Function<Map<String,Object>, OAuthUserProfileDto> of;

   OAuthAttributes(String registrationId, Function<Map<String,Object>, OAuthUserProfileDto> of){
       this.registrationId = registrationId;
       this.of = of;
   }

    /**
     * values()는 enum의 요소들을 순서대로 배열에 리턴해주고 provider가 일치하는 메소드 실행 ex) kakao, naver
     * @param registrationId
     * @param attributes
     * @return
     */
   public static OAuthUserProfileDto extract(String registrationId, Map<String,Object> attributes){
       return Arrays.stream(values())
               .filter(provider -> registrationId.equals(provider.registrationId))
               .findFirst()
               .orElseThrow(IllegalArgumentException::new)
               .of.apply(attributes);
   }


}
