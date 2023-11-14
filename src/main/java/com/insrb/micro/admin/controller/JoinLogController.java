package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.request.CommunityReqDto;
import com.insrb.micro.admin.domain.dto.response.CommunityResDto;
import com.insrb.micro.admin.domain.dto.response.JoinLogResDto;
import com.insrb.micro.admin.domain.dto.response.MemberResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.CommunityService;
import com.insrb.micro.admin.service.JoinLogService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/joinLog")
public class JoinLogController {


    private final CommunityService communityService;
    private final JoinLogService joinLogService;


    @GetMapping(path = "/joinLogList")
    @ResponseBody
    public List<JoinLogResDto> manager(Model model){
        List<JoinLogResDto> manager = joinLogService.getJoinLogList();
        return manager;
    }




    @GetMapping(path = "/selectOne")
    @ResponseBody
    public CommunityResDto selectOne(@RequestParam("id") long id){

        return communityService.selectOne(id);
    }




}
