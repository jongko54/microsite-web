package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.InfoPlaceReqDto;
import com.insrb.micro.admin.domain.dto.response.InfoPlaceResDto;
import com.insrb.micro.admin.domain.entity.InfoPlace;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.InfoPlaceRepository;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class InfoPlaceService {
    private final InfoPlaceRepository infoPlaceRepository;
    private final DeleteBatchRepository deleteBatchRepository;
    @Transactional
    public Paging getInfoPlaceList(MultiValueMap<String, String> formData){
        int draw = Integer.parseInt(formData.get("draw").get(0));
        int start = Integer.parseInt(formData.get("start").get(0));
        int length = Integer.parseInt(formData.get("length").get(0));
        int page =  start / length;

        Paging pagingDto = new Paging();

        //page = offset , length = limit
        Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC, "id"));

        String searchTitleValue = formData.get("columns[3][search][value]").get(0);
        String searchCreatedByValue = formData.get("columns[5][search][value]").get(0);
        Page<InfoPlace> list = null;

        //검색 값 여부에 따라 분기 처리
        if(!searchTitleValue.isEmpty()){
            //타이틀 검색 like sql
            list = infoPlaceRepository.findAllByTitleContaining(pageable, searchTitleValue);

        }else if (!searchCreatedByValue.isEmpty()) {
            //작성자 검색 like sql
            list = infoPlaceRepository.findAllByCreatedByContaining(pageable, searchCreatedByValue);

        }else{
            //전체 검색x
            list = infoPlaceRepository.findAll(pageable);
        }

        List<InfoPlaceResDto> listToDto = list.stream().map(InfoPlaceResDto::new).collect(Collectors.toList());

        int total = Long.valueOf(list.getTotalElements()).intValue();

        pagingDto.setDraw(draw);
        pagingDto.setRecordsFiltered(total);
        pagingDto.setRecordsTotal(total);
        pagingDto.setData(listToDto);


        return pagingDto;
    }

    public void deleteById(Long id) {
        infoPlaceRepository.deleteById(id);
    }

    //신규등록 저장
    @Transactional
    public long save(InfoPlaceReqDto params) {
        InfoPlace entity = infoPlaceRepository.save(params.toEntity());
        return entity.getId();
    }
    //비활성화
    public long batchDelete(List<Long> id) {
        deleteBatchRepository.batchUpdate(id, "tb_infoplace");

        return id.size();
    }

    //상세
    @Transactional
    public InfoPlaceResDto selectOne(long id) {
        InfoPlace entity = infoPlaceRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

        return new InfoPlaceResDto(entity);
    }
    //수정
    @Transactional
    public Long update(long id, InfoPlaceReqDto params) {
        InfoPlace entity = infoPlaceRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
        entity.update(params.getTitle(), params.getContent(), params.getDeleteYn());
        return id;
    }
}
