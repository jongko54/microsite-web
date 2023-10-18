package com.insrb.micro.admin.config.security;


import com.insrb.micro.admin.domain.entity.Manager;
import com.insrb.micro.admin.repository.ManagerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


/**
 * 사용자 id를 검증하는 클래스
 * UserDetailsService 시큐리티 구현체
 * loadUserByUsername(string username)을 구현해야됨
 */

@RequiredArgsConstructor
@Service
public class LoginValidtor implements UserDetailsService {

    private final ManagerRepository managerRepository;


    /**
     * UserDetailsService의 구현체로 사용자 ID를 검증하는 로직이 필요함
     * @param id 입력받은 사용자 ID
     * @return 로그인한 유저의 정보
     * @throws UsernameNotFoundException
     */
    @Transactional
    @Override
    public MemberDetails loadUserByUsername(String id) throws UsernameNotFoundException {

        Manager mem = managerRepository.findByUserId(id);
        System.out.println(mem.toString());
        if (mem == null) {
            return null;
        }
        return new MemberDetails(mem);
        }
}
