package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.request.MemberReqDto;
import com.insrb.micro.admin.domain.dto.response.MemberResDto;
import com.insrb.micro.admin.domain.enumrate.Role;
import com.insrb.micro.admin.service.ManagerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 관리자 컨트롤러
 * 관리자 목록 뿌려줌
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping(path = "/admin/manager")
public class ManagerController {
    private final ManagerService managerService;
    //관리자 리스트
    @GetMapping(path = "/managerList")
    @ResponseBody
    public List<MemberResDto> manager(Model model){
        List<MemberResDto> manager = managerService.getManagerList();
        return manager;
    }
    //관리자 등록
    @PostMapping(path = "/managerSave")
    @ResponseBody
    public long save(@RequestBody final MemberReqDto params){
        return managerService.save(params);
    }


    //관리자 삭제
    @PutMapping(path = "/managerDelete")
    @ResponseBody
    public Long delete(@RequestParam(value = "id[]") List<Long> id){

        long res = managerService.batchDelete(id);

        return res;
    }
    //상세 페이지
    @GetMapping(path = "/managerSelctOne")
    @ResponseBody
    public MemberResDto selectOne(@RequestParam("id") long id){

        return managerService.selectOne(id);
    }
    //수정
    @PutMapping(path = "/managerUpdate")
    @ResponseBody
    public Long update(@RequestParam("id") long id, @RequestBody final MemberReqDto params){

        return managerService.update(id, params);
    }

    //
    @GetMapping(path = "/role")
    @ResponseBody
    public Role[] roleList(){

        return Role.values();
    }


}
