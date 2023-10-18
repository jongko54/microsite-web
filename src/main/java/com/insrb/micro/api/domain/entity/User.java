package com.insrb.micro.api.domain.entity;


import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.*;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "tb_user")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends CommonEntity {

    @Id //primary key 컬럼에 붙여주는 어노테이션 필수
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment 를 사용하기 위한 어노테이션
    private Long id;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "agent_id")
    private InsuAgentApi insuAgent;
    private String userId;
    private String userPw;
    private String userName;
    private String phoneRole;
    private String address;
    private String address_detail;
    private String loginType;
    private String marketing_yn;
    private char deleteYn;


    @Builder
    public User(String userId, String userPw, String userName, String phoneRole, String loginType, String marketing_yn, char deleteYn, String address,
                String address_detail){
        this.userId = userId;
        this.userPw = userPw;
        this.userName = userName;
        this.phoneRole = phoneRole;
        this.address = address;
        this.address_detail = address_detail;
        this.loginType = loginType;
        this.marketing_yn = marketing_yn;
        this.deleteYn = deleteYn;
    }

    public User userNameUpdate(String userName){
        this.userName = userName;
        return this;
    }

    public User profileUpdate(String userName, InsuAgentApi insuAgentApi, String address, String address_detail){
        this.userName = userName;
        this.address = address;
        this.address_detail = address_detail;
        this.insuAgent = insuAgentApi;
        return this;
    }

    public User userPwUpdate(String userPw){
        this.userPw = userPw;
        return this;
    }

    public User userPhoneUpdate(String phoneRole){
        this.phoneRole = phoneRole;
        return this;
    }

}
