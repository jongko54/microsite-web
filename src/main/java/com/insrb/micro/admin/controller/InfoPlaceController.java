package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.request.InfoPlaceReqDto;
import com.insrb.micro.admin.domain.dto.response.InfoPlaceResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.service.InfoPlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping(path = "/admin/infoPlace")
public class InfoPlaceController {
    private final InfoPlaceService infoPlaceService;

    @PostMapping(path = "/infoPlaceList")
    @ResponseBody
    public ResponseEntity<Paging> infoPlaceList(@RequestBody MultiValueMap<String, String> formData){
        return ResponseEntity.ok(infoPlaceService.getInfoPlaceList(formData));
    }

    //정보마당 등록
    @PostMapping(path = "/ipSave")
    @ResponseBody
    public long save(@RequestBody final InfoPlaceReqDto params){
        return infoPlaceService.save(params);
    }

    //정보마당 삭제
    @PutMapping(path = "/ipDelete")
    @ResponseBody
    public Long delete(@RequestParam(value = "id[]") List<Long> id){

        long res = infoPlaceService.batchDelete(id);

        return res;
    }
    //상세 페이지
    @GetMapping(path = "/ipSelctOne")
    @ResponseBody
    public InfoPlaceResDto selectOne(@RequestParam("id") long id){
        System.out.println(id);

        return infoPlaceService.selectOne(id);
    }
    //수정
    @PutMapping(path = "/ipUpdate")
    @ResponseBody
    public Long update(@RequestParam("id") long id, @RequestBody final InfoPlaceReqDto params){

        return infoPlaceService.update(id, params);
    }

}
