package com.insrb.micro.admin.controller;


import com.insrb.micro.admin.domain.dto.request.CommunityReqDto;
import com.insrb.micro.admin.domain.dto.response.CommunityResDto;
import com.insrb.micro.admin.domain.dto.response.ConsultingResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.ConsultingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/consulting")
public class ConsultingController {

    private final ConsultingService consultingService;

    @PostMapping(path = "/selectList")
    @ResponseBody
    public ResponseEntity<Paging> selectList(@RequestBody MultiValueMap<String, String> formData){

        return ResponseEntity.ok(consultingService.selectList(formData));
    }

//    @PostMapping(path = "/communitySave")
//    @ResponseBody
//    public long save(@RequestBody final CommunityReqDto params){
//        log.info("/admin/community/communitySave request");
//
//
////        return ResponseEntity.ok(1);
//        return consultingService.save(params);
//    }


    @GetMapping(path = "/selectOne")
    @ResponseBody
    public ConsultingResDto selectOne(@RequestParam("id") long id){

        return consultingService.selectOne(id);
    }

//    @PutMapping(path = "/communityUpdate")
//    @ResponseBody
//    public Long update(@RequestParam("id") long id, @RequestBody final CommunityReqDto params){
//        log.info("/admin/community/update request");
//
//        return consultingService.update(id, params);
//    }

    @PutMapping(path = "/multiDelete")
    @ResponseBody
    public Long delete(@RequestParam(value = "id[]") List<Long> id){

        long res = consultingService.batchDelete(id);

        return res;
    }
}
