package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.config.security.MemberDetails;
import com.insrb.micro.admin.domain.dto.response.MemberResDto;
import com.insrb.micro.admin.service.ManagerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * root 컨트롤러
 * 어드민 요청 들어옴
 */

@Controller
@RequiredArgsConstructor
@RequestMapping(path = "/admin")
public class RootController {

    @GetMapping(path = "/login")
    public String login(){

        return "pages/login/login";
    }

    @GetMapping(path = "/main")
    public String main(Model model, @AuthenticationPrincipal MemberDetails user){

        model.addAttribute("user", user);

        return "pages/community/communityList";
    }
    //관리자 페이지
    @GetMapping(path = "/manager")
    public String  manager(Model model , @AuthenticationPrincipal MemberDetails user) {
        model.addAttribute("user",user);
        return "pages/manager/managerList";
    }

    //일반회원 페이지
    @GetMapping(path = "/generalMember")
    public String  generalMember(Model model , @AuthenticationPrincipal MemberDetails user) {
        model.addAttribute("user",user);
        return "pages/generalMember/generalMember";
    }

    //정책
    @GetMapping(path = "/policy")
    public String policy(Model model, @AuthenticationPrincipal MemberDetails user){
        model.addAttribute("user",user);
        return "pages/policy/policy";
    }

    //정책 공지 내용
    @GetMapping(path = "/notice")
    public String notice(Model model, @AuthenticationPrincipal MemberDetails user){
        model.addAttribute("user",user);
        return "pages/policy/notice";
    }

    //정보 마당
    @GetMapping(path = "/infoPlace")
    public String infoPlace(Model model, @AuthenticationPrincipal MemberDetails user){
        model.addAttribute("user",user);
        return "pages/infoPlace/infoPlace";
    }

    //보험 상품
    @GetMapping(path = "/mydataInsurance")
    public String mydataInsurance(Model model, @AuthenticationPrincipal MemberDetails user){
        model.addAttribute("user",user);
        return "pages/mydataInsurance/mydataInsurance";
    }

    //마이데이터 유저
    @GetMapping(path = "/mydataUser")
    public String mydataUser(Model model, @AuthenticationPrincipal MemberDetails user){
        model.addAttribute("user",user);
        return "pages/mydataUser/mydataUser";
    }

    //마이데이터 유저
    @GetMapping(path = "/simpleCalc")
    public String simpleCalc(Model model, @AuthenticationPrincipal MemberDetails user){
        model.addAttribute("user",user);
        return "pages/simpleCalc/simpleCalc";
    }

    @GetMapping(path = "/domesticTour")
    public String domesticTour(Model model, @AuthenticationPrincipal MemberDetails user){
        model.addAttribute("user",user);
        return "pages/domesticTour/domesticTour";
    }

    //상담신청 관리 페이지
    @GetMapping(path = "/consulting")
    public String consulting(){
        return "pages/consulting/consulting";
    }


    @GetMapping(path = "/test")
    public String test(Model model){

        return "pages/manager/test2";
    }

    //미가입자 관리 페이지
    @GetMapping(path = "/unjoin")
    public String unregistred(){
        return "pages/unjoin/unjoin";
    }


    @GetMapping(path = "/batch")
    public String batchForm(){
        return "pages/batch/batchList";
    }

    @GetMapping(path = "/insuAgent")
    public String insuAgentForm(){
        return "pages/insurance/insuAgentList";
    }
}
