package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.CommunityReqDto;
import com.insrb.micro.admin.domain.dto.response.CommunityResDto;
import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.CommunityRepository;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class CommunityService {

    private final CommunityRepository communityRepository;

    private final DeleteBatchRepository deleteBatchRepository;


    @Transactional
    public Paging selectList(MultiValueMap<String, String> formData){

        int draw = Integer.parseInt(formData.get("draw").get(0));
        int start = Integer.parseInt(formData.get("start").get(0));
        int length = Integer.parseInt(formData.get("length").get(0));
        int page =  start / length;

        Paging pagingDto = new Paging();

        //page = offset , length = limit
        Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC, "id"));

        String searchTitleValue = formData.get("columns[3][search][value]").get(0);
        String searchCreatedByValue = formData.get("columns[5][search][value]").get(0);
        Page<Community> list = null;

        //검색 값 여부에 따라 분기 처리
        if(!searchTitleValue.isEmpty()){
            //타이틀 검색 like sql
            list = communityRepository.findAllByTitleContaining(pageable, searchTitleValue);

        }else if (!searchCreatedByValue.isEmpty()) {
            //작성자 검색 like sql
            list = communityRepository.findAllByCreatedByContaining(pageable, searchCreatedByValue);

        }else{
            //전체 검색x
            list = communityRepository.findAll(pageable);
        }

        List<CommunityResDto> listToDto = list.stream().map(CommunityResDto::new).collect(Collectors.toList());

        int total = Long.valueOf(list.getTotalElements()).intValue();

        pagingDto.setDraw(draw);
        pagingDto.setRecordsFiltered(total);
        pagingDto.setRecordsTotal(total);
        pagingDto.setData(listToDto);


        return pagingDto;
    }

    @Transactional
    public long save(CommunityReqDto params) {
        Community entity = communityRepository.save(params.toEntity());
        return entity.getId();
    }

    @Transactional
    public CommunityResDto selectOne(long id) {
        Community entity = communityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));


        return new CommunityResDto(entity);
    }

    @Transactional
    public Long update(long id, CommunityReqDto params) {
        Community entity = communityRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
        entity.update(params.getCategory(),params.getCode(), params.getTitle(), params.getContent(), params.getDeleteYn());
        return id;
    }

    public long batchDelete(List<Long> id) {
        deleteBatchRepository.batchUpdate(id, "tb_community");

        return id.size();
    }
}
