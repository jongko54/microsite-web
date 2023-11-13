package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.MydataInsuranceReqDto;
import com.insrb.micro.admin.domain.dto.response.MydataInsuranceResDto;
import com.insrb.micro.admin.domain.entity.MydataInsurance;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.MydataInsuranceRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

@Service
@RequiredArgsConstructor
public class MydataInsuranceService {
  private final MydataInsuranceRepository mydataInsuranceRepository;
  private final DeleteBatchRepository deleteBatchRepository;
  @Transactional
  public Paging getMydataInsuranceList(MultiValueMap<String, String> formData){
    int draw = Integer.parseInt(formData.get("draw").get(0));
    int start = Integer.parseInt(formData.get("start").get(0));
    int length = Integer.parseInt(formData.get("length").get(0));
    int page =  start / length;

    Paging pagingDto = new Paging();

    //page = offset , length = limit
    Pageable pageable = PageRequest.of(page, length, Sort.by(Direction.DESC, "id"));
    
    String searchMydataInsuranceTitleValue = formData.get("columns[4][search][value]").get(0);
    String searchCreatedByValue = formData.get("columns[7][search][value]").get(0);
    //formData.get("keyword").get(0);

    Page<MydataInsurance> list = null;

    //검색 값 여부에 따라 분기 처리
    if(!searchMydataInsuranceTitleValue.isEmpty()){
      //타이틀 검색 like sql
      list = mydataInsuranceRepository.findAllByMydataInsuranceTitleContaining(pageable, searchMydataInsuranceTitleValue);

    }else if (!searchCreatedByValue.isEmpty()) {
      //작성자 검색 like sql
      list = mydataInsuranceRepository.findAllByCreatedByContaining(pageable, searchCreatedByValue);

    }else{
      //전체 검색x
      list = mydataInsuranceRepository.findAll(pageable);
    }

    System.out.println(formData);


//    word = word.replaceAll("[^\\^]","");


    //list = mydataInsuranceRepository.findAllBy

    List<MydataInsuranceResDto> listToDto = list.stream().map(MydataInsuranceResDto::new).collect(
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
    mydataInsuranceRepository.deleteById(id);
  }

  //신규등록 저장
  @Transactional
  public long save(MydataInsuranceReqDto params) {
    System.out.println(params);
    MydataInsurance entity = mydataInsuranceRepository.save(params.toEntity());
    return entity.getId();
  }

  //비활성화
  public long batchDelete(List<Long> id) {
    deleteBatchRepository.batchUpdate(id, "tb_mydata_insurance");

    return id.size();
  }

  //상세
  @Transactional
  public MydataInsuranceResDto selectOne(long id) {
    MydataInsurance entity = mydataInsuranceRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

    return new MydataInsuranceResDto(entity);
  }
  //수정
  @Transactional
  public Long update(long id, MydataInsuranceReqDto params) {
    MydataInsurance entity = mydataInsuranceRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
    entity.update(params.getMydataInsuranceProduct(),params.getMydataInsuranceTitle(), params.getMydataInsuranceContent(),params.getKeyword(), params.getDeleteYn() );

    return id;
  }

}
