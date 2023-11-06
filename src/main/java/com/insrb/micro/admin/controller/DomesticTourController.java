package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.DomesticTourService;
import com.insrb.micro.admin.service.MydataInsuranceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
}
