package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.MydataInsuranceReqDto;
import com.insrb.micro.admin.domain.dto.response.MydataInsuranceResDto;
import com.insrb.micro.admin.domain.dto.response.MydataUserResDto;
import com.insrb.micro.admin.domain.entity.MydataInsurance;
import com.insrb.micro.admin.domain.entity.MydataUser;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.MydataUserRepository;
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
public class MydataUserService {

  private final MydataUserRepository mydataUserRepository;
  private final DeleteBatchRepository deleteBatchRepository;
  @Transactional
  public Paging mydataUserList(MultiValueMap<String, String> formData){
    int draw = Integer.parseInt(formData.get("draw").get(0));
    int start = Integer.parseInt(formData.get("start").get(0));
    int length = Integer.parseInt(formData.get("length").get(0));
    int page =  start / length;

    Paging pagingDto = new Paging();

    //page = offset , length = limit
    Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC, "id"));

    String searchUserEmailValue = formData.get("columns[3][search][value]").get(0);
    String searchCreatedByValue = formData.get("columns[4][search][value]").get(0);
    Page<MydataUser> list = null;

    //검색 값 여부에 따라 분기 처리
    if(!searchUserEmailValue.isEmpty()){
      //타이틀 검색 like sql
      list = mydataUserRepository.findAllByUserEmailContaining(pageable, searchUserEmailValue);

    }else if (!searchCreatedByValue.isEmpty()) {
      //작성자 검색 like sql
      list = mydataUserRepository.findAllByCreatedByContaining(pageable, searchCreatedByValue);

    }else{
      //전체 검색x
      list = mydataUserRepository.findAll(pageable);
      System.out.println(list);
    }

    List<MydataUserResDto> listToDto = list.stream().map(MydataUserResDto::new).collect(
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
    mydataUserRepository.deleteById(id);
  }

  //비활성화
  public long batchDelete(List<Long> id) {
    deleteBatchRepository.batchUpdate(id, "tb_mydata_user");

    return id.size();
  }

  //상세
  @Transactional
  public MydataUserResDto selectOne(long id) {
    MydataUser entity = mydataUserRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

    return new MydataUserResDto(entity);
  }
}
