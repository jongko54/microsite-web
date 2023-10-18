package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.response.BatchResDto;
import com.insrb.micro.admin.domain.dto.response.CommunityResDto;
import com.insrb.micro.admin.domain.entity.Batch;
import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.BatchRepository;
import com.insrb.micro.api.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MultiValueMap;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Slf4j
public class BatchService {

    private final BatchRepository batchRepository;

    public Paging selectList(MultiValueMap<String, String> formData) {
        int draw = Integer.parseInt(formData.get("draw").get(0));
        int start = Integer.parseInt(formData.get("start").get(0));
        int length = Integer.parseInt(formData.get("length").get(0));
        int page =  start / length;

        Paging pagingDto = new Paging();

        //page = offset , length = limit
        Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC, "stepExecutionId"));

        String searchTitleValue = formData.get("columns[3][search][value]").get(0);
        String searchCreatedByValue = formData.get("columns[5][search][value]").get(0);
        Page<Batch> list = null;

        //검색 값 여부에 따라 분기 처리
        if(!searchTitleValue.isEmpty()){
            //타이틀 검색 like sql
//            list = communityRepository.findAllByTitleContaining(pageable, searchTitleValue);

        }else if (!searchCreatedByValue.isEmpty()) {
            //작성자 검색 like sql
//            list = communityRepository.findAllByCreatedByContaining(pageable, searchCreatedByValue);

        }else{
            //전체 검색x
            list = batchRepository.findAll(pageable);
        }

        List<BatchResDto> listToDto = list.stream().map(BatchResDto::new).collect(Collectors.toList());

        int total = Long.valueOf(list.getTotalElements()).intValue();

        pagingDto.setDraw(draw);
        pagingDto.setRecordsFiltered(total);
        pagingDto.setRecordsTotal(total);
        pagingDto.setData(listToDto);


        return pagingDto;
    }
}
