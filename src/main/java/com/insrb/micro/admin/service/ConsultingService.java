package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.response.ConsultingResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.ConsultingRepository;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.api.domain.entity.Consulting;
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
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ConsultingService {

    private final ConsultingRepository consultingRepository;

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

        String searchTitleValue = formData.get("columns[2][search][value]").get(0);
        String searchCreatedByValue = formData.get("columns[4][search][value]").get(0);
        Page<Consulting> list = null;

        //검색 값 여부에 따라 분기 처리
        if(!searchTitleValue.isEmpty()){
            //타이틀 검색 like sql
            list = consultingRepository.findAllByNameContaining(pageable, searchTitleValue);

        }else if (!searchCreatedByValue.isEmpty()) {
            //작성자 검색 like sql
            list = consultingRepository.findAllByBusinessContaining(pageable, searchCreatedByValue);

        }else{
            //전체 검색x
            list = consultingRepository.findAll(pageable);
        }

        List<ConsultingResDto> listToDto = list.stream().map(ConsultingResDto::new).collect(Collectors.toList());

        int total = Long.valueOf(list.getTotalElements()).intValue();

        pagingDto.setDraw(draw);
        pagingDto.setRecordsFiltered(total);
        pagingDto.setRecordsTotal(total);
        pagingDto.setData(listToDto);


        return pagingDto;
    }

//    @Transactional
//    public long save(CommunityReqDto params) {
//        Consulting entity = consultingRepository.save(params.toEntity());
//        return entity.getId();
//    }

    @Transactional
    public ConsultingResDto selectOne(long id) {
        Consulting entity = consultingRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));


        return new ConsultingResDto(entity);
    }

//    @Transactional
//    public Long update(long id, CommunityReqDto params) {
//        Consulting entity = consultingRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
//        entity.update(params.getCategory(),params.getCode(), params.getTitle(), params.getContent(), params.getDeleteYn());
//        return id;
//    }

    public long batchDelete(List<Long> id) {
        deleteBatchRepository.batchUpdate(id, "tb_consulting");

        return id.size();
    }

}
