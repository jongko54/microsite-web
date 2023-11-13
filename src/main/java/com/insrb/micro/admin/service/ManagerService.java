package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.MemberReqDto;
import com.insrb.micro.admin.domain.dto.response.MemberResDto;
import com.insrb.micro.admin.domain.entity.Manager;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.ManagerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 관리자 페이지 로그인 서비스
 */

@Service
@RequiredArgsConstructor
public class ManagerService {

    private final ManagerRepository managerRepository;

    private final DeleteBatchRepository deleteBatchRepository;

    private final PasswordEncoder passwordEncoder;

    public void deleteById(Long id) {
        managerRepository.deleteById(id);
    }

    //관리자 목록 리스트
    @Transactional
    public List<MemberResDto> getManagerList(){
        List<Manager> manager = managerRepository.findAll();
        return manager.stream().map(MemberResDto::new).collect(Collectors.toList());
    }
    //관리자 등록
    @Transactional
    public long save(MemberReqDto params) {
        params.setUserPw(passwordEncoder.encode(params.getUserPw()));
        Manager entity = managerRepository.save(params.toEntity());
        return entity.getId();
    }
    //관리자 비활성화
    public long batchDelete(List<Long> id) {
        deleteBatchRepository.batchUpdate(id, "tb_manager");

        return id.size();
    }
    //관리자 상세
    @Transactional
    public MemberResDto selectOne(long id) {
        Manager entity = managerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

        return new MemberResDto(entity);
    }
    //관리자 수정
    @Transactional
    public Long update(long id, MemberReqDto params) {
        Manager entity = managerRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
        entity.update(params.getPhoneRole(),params.getDeleteYn(), params.getRole());
        return id;
    }

}
