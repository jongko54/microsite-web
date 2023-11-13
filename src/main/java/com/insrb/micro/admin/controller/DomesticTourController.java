package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.response.DomesticTourResDto;
import com.insrb.micro.admin.domain.dto.response.SimpleCalcResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.DomesticTourService;
import com.insrb.micro.admin.service.MydataInsuranceService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequiredArgsConstructor
@RequestMapping(path = "/admin/domesticTour")
public class DomesticTourController {

  private final DomesticTourService domesticTourService;

  //리스트 조회
  @PostMapping(path = "/domesticTourList")
  @ResponseBody
  public ResponseEntity<Paging> domesticTourList(@RequestBody MultiValueMap<String, String> formData) {
    return ResponseEntity.ok(domesticTourService.getDomesticTourList(formData));
  }

  //국내 여행자 보험 삭제
  @PutMapping(path = "/domesticTourDelete")
  @ResponseBody
  public Long delete(@RequestParam(value = "id[]") List<Long> id){

    long res = domesticTourService.batchDelete(id);

    return res;
  }
  //상세 페이지
  @GetMapping(path = "/domesticTourSelctOne")
  @ResponseBody
  public DomesticTourResDto selectOne(@RequestParam("id") long id){
    System.out.println(id);

    return domesticTourService.selectOne(id);
  }
}
