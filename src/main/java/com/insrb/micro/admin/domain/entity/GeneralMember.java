package com.insrb.micro.admin.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)  //파라미터 없는 생성자 생성 어노테이션
@Table(name = "tb_user")
@Entity
public class GeneralMember extends CommonEntity {
    @Id //primary key 컬럼에 붙여주는 어노테이션 필수
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment 를 사용하기 위한 어노테이션
    private Long id;
    private String userId;
    private String userPw;
    private String phoneRole;
    private String address;
    private String address_detail;
    private String userName;
    private String loginType;
    private char deleteYn;

    @Builder
    public GeneralMember(int id, String userId, String userPw, String phoneRole, String address, String address_detail ,String userName,String loginType, char deleteYn){
        this.id         = (long) id;
        this.userId     = userId;
        this.userPw     = userPw;
        this.phoneRole  = phoneRole;
        this.address    = address;
        this.address_detail = address_detail;
        this.userName   = userName;
        this.loginType  = loginType;
        this.deleteYn   = deleteYn;

    }

    public void update(String phoneRole,String userName, char deleteYn ){
        //this.userId = userId;
        //this.userPw = userPw;
        this.phoneRole = phoneRole;
        this.userName = userName;
        this.deleteYn = deleteYn;

    }


}
