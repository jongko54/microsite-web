package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.PolicyReqDto;
import com.insrb.micro.admin.domain.dto.response.PolicyResDto;
import com.insrb.micro.admin.domain.entity.Policy;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.PolicyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 정책 서비스
 */
@Service
@RequiredArgsConstructor
public class PolicyService {
    private final PolicyRepository policyRepository;
    private final DeleteBatchRepository deleteBatchRepository;
    PasswordEncoder passwordEncoder;
    //리스트
    @Transactional
    public List<PolicyResDto> getPolicyList(){
        List<Policy> policy = policyRepository.findAll();
        return policy.stream().map(PolicyResDto::new).collect(Collectors.toList());
    }

    public void deleteById(Long id) {
        policyRepository.deleteById(id);
    }

    //관리자 등록
    @Transactional
    public long save(PolicyReqDto params) {
        Policy entity = policyRepository.save(params.toEntity());
        return entity.getId();
    }
    //관리자 비활성화
    public long batchDelete(List<Long> id) {
        deleteBatchRepository.batchUpdate(id, "tb_policy");

        return id.size();
    }

    //관리자 상세
    @Transactional
    public PolicyResDto selectOne(long id) {
        Policy entity = policyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

        return new PolicyResDto(entity);
    }
    //관리자 수정
    @Transactional
    public Long update(long id, PolicyReqDto params) {
        Policy entity = policyRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
        entity.update(params.getPolicy(), params.getDeleteYn());
        return id;
    }

}
