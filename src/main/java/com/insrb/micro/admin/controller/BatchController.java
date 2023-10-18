package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.BatchService;
import com.insrb.micro.api.common.ApiResponse;
import com.insrb.micro.api.common.ResponseUtil;
import com.insrb.micro.api.common.SuccessCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/admin/batch")
public class BatchController {


    private final BatchService batchService;

    @PostMapping(path = "/selectList")
    @ResponseBody
    public ResponseEntity<Paging> selectList(@RequestBody MultiValueMap<String, String> formData){

        return ResponseEntity.ok(batchService.selectList(formData));
    }


}
