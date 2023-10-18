package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.request.PolicyReqDto;
import com.insrb.micro.admin.domain.dto.response.PolicyResDto;
import com.insrb.micro.admin.service.PolicyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping(path = "/admin/policy")
public class PolicyController {

    private final PolicyService policyService;
    //정책 리스트
    @GetMapping(path = "/policyList")
    @ResponseBody
    public List<PolicyResDto> policy(Model model){
        List<PolicyResDto> policy = policyService.getPolicyList();
        System.out.println("////////////////////////////////////////////////////");
        return policy;
    }
    //정책 등록
    @PostMapping(path = "/policySave")
    @ResponseBody
    public long save(@RequestBody final PolicyReqDto params){
        return policyService.save(params);
    }

    //정책 삭제
    @PutMapping(path = "/policyDelete")
    @ResponseBody
    public Long delete(@RequestParam(value = "id[]") List<Long> id){

        long res = policyService.batchDelete(id);

        return res;
    }
    //상세 페이지
    @GetMapping(path = "/policySelctOne")
    @ResponseBody
    public PolicyResDto selectOne(@RequestParam("id") long id){
        System.out.println(id);

        return policyService.selectOne(id);
    }
    //수정
    @PutMapping(path = "/policyUpdate")
    @ResponseBody
    public Long update(@RequestParam("id") long id, @RequestBody final PolicyReqDto params){

        return policyService.update(id, params);
    }



}
