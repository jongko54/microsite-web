package com.insrb.micro.admin.config.security;


import com.insrb.micro.admin.domain.entity.Manager;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data

public class MemberDetails implements UserDetails {


    private final Manager member;

    public MemberDetails(Manager member){
        this.member = member;
    }

    /**
     * 계정의 권한목록을 리턴해줌
     * @return
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }


    /**
     * 사용자 pk값 리턴
     * @return
     */
    public Long getId(){
        return member.getId();
    }

    /**
     * 사용자 비밀번호 리턴
     * @return
     */
    @Override
    public String getPassword() {
        return member.getUserPw();
    }

    /**
     * 사용자 id 리턴
     * @return
     */
    @Override
    public String getUsername() {
        return member.getUserId();
    }

    /**
     * 계정의 만료 여부를 리턴한다 (true = 만료안됨)
      * @return
     */
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    /**
     * 계정 잠김 여부 (true = 잠기지않음)
     * @return
     */
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    /**
     * 비밀번호 만료여부 리턴 (true = 만료안됨)
     * @return
     */
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /**
     * 계정의 활성화 여부 (true 활성화 됨)
     * @return
     */
    @Override
    public boolean isEnabled() {
        return true;
    }
}
