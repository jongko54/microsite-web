package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.response.DomesticTourResDto;
import com.insrb.micro.admin.domain.dto.response.MydataInsuranceResDto;
import com.insrb.micro.admin.domain.dto.response.SimpleCalcResDto;
import com.insrb.micro.admin.domain.entity.MydataInsurance;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.DomesticTourRepository;
import com.insrb.micro.admin.repository.MydataInsuranceRepository;
import com.insrb.micro.api.domain.entity.DomesticTourApi;
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
public class DomesticTourService {

  private final DomesticTourRepository domesticTourRepository;
  private final DeleteBatchRepository deleteBatchRepository;
  @Transactional
  public Paging getDomesticTourList(MultiValueMap<String, String> formData){

    int draw = Integer.parseInt(formData.get("draw").get(0));
    int start = Integer.parseInt(formData.get("start").get(0));
    int length = Integer.parseInt(formData.get("length").get(0));
    int page =  start / length;

    Paging pagingDto = new Paging();

    //page = offset , length = limit
    Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC, "id"));

    String searchEmailValue = formData.get("columns[4][search][value]").get(0);
    String searchCreatedByValue = formData.get("columns[7][search][value]").get(0);
    Page<DomesticTourApi> list = null;

    //검색 값 여부에 따라 분기 처리
    if(!searchEmailValue.isEmpty()){
      //타이틀 검색 like sql
      list = domesticTourRepository.findAllByEmailContaining(pageable, searchEmailValue);

    }else if (!searchCreatedByValue.isEmpty()) {
      //작성자 검색 like sql
      list = domesticTourRepository.findAllByCreatedByContaining(pageable, searchCreatedByValue);

    }else{
      //전체 검색x
      list = domesticTourRepository.findAll(pageable);
    }

    List<DomesticTourResDto> listToDto = list.stream().map(DomesticTourResDto::new).collect(
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
    domesticTourRepository.deleteById(id);
  }

  //비활성화
  public long batchDelete(List<Long> id) {
    deleteBatchRepository.batchUpdate(id, "tb_domestic_tour");

    return id.size();
  }

  //상세
  @Transactional
  public DomesticTourResDto selectOne(long id) {
    DomesticTourApi entity = domesticTourRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

    return new DomesticTourResDto(entity);
  }




}
