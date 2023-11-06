package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.response.SimpleCalcResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.SimpleCalcService;
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
@RequestMapping(path = "/admin/simpleCalc")
public class SimpleCalcController {
  private final SimpleCalcService simpleCalcService;

  //국내 여행자 보험 계산 리스트
  @PostMapping(path = "/simpleCalc")
  @ResponseBody
  public ResponseEntity<Paging> simpleCalcList(@RequestBody MultiValueMap<String, String> formData){

    return ResponseEntity.ok(simpleCalcService.simpleCalcList(formData));
  }

  //국내 여행자 보험 계산 삭제
  @PutMapping(path = "/simpleCalcDelete")
  @ResponseBody
  public Long delete(@RequestParam(value = "id[]") List<Long> id){

    long res = simpleCalcService.batchDelete(id);

    return res;
  }
  //상세 페이지
  @GetMapping(path = "/simpleCalcSelctOne")
  @ResponseBody
  public SimpleCalcResDto selectOne(@RequestParam("id") long id){
    System.out.println(id);

    return simpleCalcService.selectOne(id);
  }
}
