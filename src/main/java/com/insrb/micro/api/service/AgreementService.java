package com.insrb.micro.api.service;


import com.insrb.micro.api.domain.dto.response.AgreementResponseDto;
import com.insrb.micro.api.domain.entity.Agreement;
import com.insrb.micro.api.repository.AgreementRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AgreementService {

    private final AgreementRepository agreementRepository;

    @Transactional
    public List<AgreementResponseDto> agreementList() {
       List<Agreement> agreement = agreementRepository.findAll();

       return agreement.stream().map(AgreementResponseDto::new).collect(Collectors.toList());
    }
}
