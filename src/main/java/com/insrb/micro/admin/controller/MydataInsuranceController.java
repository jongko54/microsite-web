package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.request.MydataInsuranceReqDto;
import com.insrb.micro.admin.domain.dto.response.MydataInsuranceResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
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
@RequestMapping(path = "/admin/mydataInsurance")
public class MydataInsuranceController {

  private final MydataInsuranceService mydataInsuranceService;

  //리스트 조회
  @PostMapping(path = "/mydataInsuranceList")
  @ResponseBody
  public ResponseEntity<Paging> mydataInsuranceList(@RequestBody MultiValueMap<String, String> formData){
    return ResponseEntity.ok(mydataInsuranceService.getMydataInsuranceList(formData));
  }

  //보험상품 등록
  @PostMapping(path = "/mydataInsuranceSave")
  @ResponseBody
  public long save(@RequestBody final MydataInsuranceReqDto params){
    return mydataInsuranceService.save(params);
  }

  //보험상품 삭제
  @PutMapping(path = "/mydataInsuranceDelete")
  @ResponseBody
  public Long delete(@RequestParam(value = "id[]") List<Long> id){

    long res = mydataInsuranceService.batchDelete(id);

    return res;
  }
  //상세 페이지
  @GetMapping(path = "/mydataInsuranceSelctOne")
  @ResponseBody
  public MydataInsuranceResDto selectOne(@RequestParam("id") long id){
    System.out.println(id);

    return mydataInsuranceService.selectOne(id);
  }
  //수정
  @PutMapping(path = "/mydataInsuranceUpdate")
  @ResponseBody
  public Long update(@RequestParam("id") long id, @RequestBody final MydataInsuranceReqDto params){

    return mydataInsuranceService.update(id, params);
  }

}
