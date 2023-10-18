package com.insrb.micro.api.service;


import com.insrb.micro.api.domain.dto.request.ConsultingRequestDto;
import com.insrb.micro.api.domain.entity.Consulting;
import com.insrb.micro.api.repository.ConsultingApiRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class ConsultingApiService {

    private final ConsultingApiRepository consultingApiRepository;

    /**
     * 상담 신청 등록
     * @param params
     * @return 신청자(name)
     */
    public String consultingRegi(ConsultingRequestDto params) {
        Consulting entity = consultingApiRepository.save(params.toEntity());

        return entity.getName();
    }
}
