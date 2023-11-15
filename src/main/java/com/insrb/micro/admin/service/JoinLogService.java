package com.insrb.micro.admin.service;


import com.insrb.micro.admin.domain.dto.response.JoinLogResDto;
import com.insrb.micro.admin.domain.entity.JoinLog;
import com.insrb.micro.admin.repository.JoinLogRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class JoinLogService {

    private final JoinLogRepository joinLogRepository;


    @Transactional
    public List<JoinLogResDto> getJoinLogList(){
        List<JoinLog> joinLogs = joinLogRepository.findAll();
        System.out.println("222222222222222");
        return joinLogs.stream().map(JoinLogResDto::new).collect(Collectors.toList());
    }

    @Transactional
    public JoinLogResDto selectOne(long id) {
        JoinLog entity = joinLogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));


        return new JoinLogResDto(entity);
    }

}
