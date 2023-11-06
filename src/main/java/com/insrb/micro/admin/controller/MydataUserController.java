package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.response.MydataUserResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.MydataUserService;
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
@RequestMapping(path = "/admin/mydataUser")
public class MydataUserController {

  private final MydataUserService mydataUserService;

  @PostMapping(path = "/mydataUser")
  @ResponseBody
  public ResponseEntity<Paging> mydataUserList(@RequestBody MultiValueMap<String, String> formData){

    return ResponseEntity.ok(mydataUserService.mydataUserList(formData));
  }

  //보험상품 삭제
  @PutMapping(path = "/mydataUserDelete")
  @ResponseBody
  public Long delete(@RequestParam(value = "id[]") List<Long> id){

    long res = mydataUserService.batchDelete(id);

    return res;
  }
  //상세 페이지
  @GetMapping(path = "/mydataUserSelctOne")
  @ResponseBody
  public MydataUserResDto selectOne(@RequestParam("id") long id){
    System.out.println(id);

    return mydataUserService.selectOne(id);
  }

}
