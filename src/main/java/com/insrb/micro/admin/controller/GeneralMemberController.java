package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.response.GeneralMemberResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.GeneralMemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 일반회원 컨트롤러
 * 일반회원 리스트 관리
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping(path = "/admin/generalMember")
public class GeneralMemberController {

    private final GeneralMemberService gmService;
    //관리자 리스트
    @PostMapping(path = "/gmList")
    @ResponseBody
    public ResponseEntity<Paging> generalMember(Paging pagingDto, @RequestBody MultiValueMap<String, String> formData, Pageable pageable ){
        //List<GeneralMemberResDto> gm = gmService.getGmList(formData);
        return ResponseEntity.ok(gmService.getGmList(formData));

    }

//    @PostMapping(path = "/gmSave")
//    @ResponseBody
//    public long save(@RequestBody final GeneralMemberReqDto params){
//        return gmService.save(params);
//    }
//
//    //일반 삭제
//    @PutMapping(path = "/gmDelete")
//    @ResponseBody
//    public Long delete(@RequestParam(value = "id[]") List<Long> id){
//
//        long res = gmService.batchDelete(id);
//
//        return res;
//    }
//
//    //상세 페이지
//    @GetMapping(path = "/gmSelctOne")
//    @ResponseBody
//    public GeneralMemberResDto selectOne(@RequestParam("id") long id){
//
//        return gmService.selectOne(id);
//    }
//
//    //수정
//    @PutMapping(path = "/gmUpdate")
//    @ResponseBody
//    public Long update(@RequestParam("id") long id, @RequestBody final GeneralMemberReqDto params){
//
//        return gmService.update(id, params);
//    }

}
