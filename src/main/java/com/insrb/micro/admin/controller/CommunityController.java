package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.request.CommunityReqDto;
import com.insrb.micro.admin.domain.dto.response.CommunityResDto;
import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.CommunityService;
import groovy.util.logging.Log4j;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/community")
public class CommunityController {


    private final CommunityService communityService;

    @PostMapping(path = "/selectList")
    @ResponseBody
    public ResponseEntity<Paging> selectList(@RequestBody MultiValueMap<String, String> formData){

        return ResponseEntity.ok(communityService.selectList(formData));
    }

    @PostMapping(path = "/communitySave")
    @ResponseBody
    public long save(@RequestBody final CommunityReqDto params){


//        return ResponseEntity.ok(1);
        return communityService.save(params);
    }


    @GetMapping(path = "/selectOne")
    @ResponseBody
    public CommunityResDto selectOne(@RequestParam("id") long id){

        return communityService.selectOne(id);
    }

    @PutMapping(path = "/communityUpdate")
    @ResponseBody
    public Long update(@RequestParam("id") long id, @RequestBody final CommunityReqDto params){

        return communityService.update(id, params);
    }

    @PutMapping(path = "/communityDelete")
    @ResponseBody
    public Long delete(@RequestParam(value = "id[]") List<Long> id){

       long res = communityService.batchDelete(id);

        return res;
    }

}
