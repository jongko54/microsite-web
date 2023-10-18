package com.insrb.micro.api.service;

import com.insrb.micro.admin.domain.dto.response.InsuAgentResDto;
import com.insrb.micro.admin.domain.entity.InsuAgent;
import com.insrb.micro.api.domain.dto.response.InsuAgentApiResDto;
import com.insrb.micro.api.domain.entity.InsuAgentApi;
import com.insrb.micro.api.repository.InsuAgentApiRespository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class InsuAgentApiService {

    private final InsuAgentApiRespository insuAgentApiRespository;

    public List<InsuAgentApiResDto> insuList() {
        List<InsuAgentApi> list = insuAgentApiRespository.findCompany();

        return list.stream().map(InsuAgentApiResDto::new).collect(Collectors.toList());
    }
}
