package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.response.SimpleCalcResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.SimpleCalcRepository;
import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

@Service
@RequiredArgsConstructor
public class SimpleCalcService {

  private final SimpleCalcRepository simpleCalcRepository;
  private final DeleteBatchRepository deleteBatchRepository;
  @Transactional
  public Paging simpleCalcList(MultiValueMap<String, String> formData){
    int draw = Integer.parseInt(formData.get("draw").get(0));
    int start = Integer.parseInt(formData.get("start").get(0));
    int length = Integer.parseInt(formData.get("length").get(0));
    int page =  start / length;

    Paging pagingDto = new Paging();

    //page = offset , length = limit
    Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC, "id"));

//    String searchUserEmailValue = formData.get("columns[3][search][value]").get(0);
//    String searchCreatedByValue = formData.get("columns[4][search][value]").get(0);
    Page<SimpleCalc> list = null;

    //검색 값 여부에 따라 분기 처리
//    if(!searchUserEmailValue.isEmpty()){
//      //타이틀 검색 like sql
//      list = simpleCalcRepository.findAllByUserEmailContaining(pageable, searchUserEmailValue);
//
//    }else if (!searchCreatedByValue.isEmpty()) {
//      //작성자 검색 like sql
//      list = simpleCalcRepository.findAllByCreatedByContaining(pageable, searchCreatedByValue);
//
//    }else{
      //전체 검색x
      list = simpleCalcRepository.findAll(pageable);
      System.out.println(list);
    //}

    List<SimpleCalcResDto> listToDto = list.stream().map(SimpleCalcResDto::new).collect(
        Collectors.toList());
    System.out.println(listToDto);

    int total = Long.valueOf(list.getTotalElements()).intValue();

    pagingDto.setDraw(draw);
    pagingDto.setRecordsFiltered(total);
    pagingDto.setRecordsTotal(total);
    pagingDto.setData(listToDto);

    return pagingDto;
  }

  public void deleteById(Long id) {
    simpleCalcRepository.deleteById(id);
  }

  //비활성화
  public long batchDelete(List<Long> id) {
    deleteBatchRepository.batchUpdate(id, "tb_simple_calc");

    return id.size();
  }

  //상세
  @Transactional
  public SimpleCalcResDto selectOne(long id) {
    SimpleCalc entity = simpleCalcRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

    return new SimpleCalcResDto(entity);
  }

}
