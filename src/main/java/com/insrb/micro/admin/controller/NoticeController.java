package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.request.NoticeReqDto;
import com.insrb.micro.admin.domain.dto.response.NoticeResDto;
import com.insrb.micro.admin.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping(path = "/admin/notice")
public class NoticeController {

    private final NoticeService noticeService;
    //정책공지 리스트
    @GetMapping(path = "/noticeList")
    @ResponseBody
    public List<NoticeResDto> notice(Model model){
        List<NoticeResDto> notice = noticeService.getNoticeList();
        return notice;
    }
    //정책공지 등록
    @PostMapping(path = "/noticeSave")
    @ResponseBody
    public long save(@RequestBody final NoticeReqDto params){
        return noticeService.save(params);
    }

    //정책공지 삭제
    @PutMapping(path = "/noticeDelete")
    @ResponseBody
    public Long delete(@RequestParam(value = "id[]") List<Long> id){

        long res = noticeService.batchDelete(id);

        return res;
    }
    //상세 페이지
    @GetMapping(path = "/noticeSelctOne")
    @ResponseBody
    public NoticeResDto selectOne(@RequestParam("id") long id){
        System.out.println(id);

        return noticeService.selectOne(id);
    }
    //수정
    @PutMapping(path = "/noticeUpdate")
    @ResponseBody
    public Long update(@RequestParam("id") long id, @RequestBody final NoticeReqDto params){

        return noticeService.update(id, params);
    }







}
