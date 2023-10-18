package com.insrb.micro.admin.controller;


import com.insrb.micro.admin.domain.dto.request.InsuAgentReqDto;
import com.insrb.micro.admin.domain.dto.response.ExcelAgentResDto;
import com.insrb.micro.admin.domain.dto.response.InsuAgentResDto;
import com.insrb.micro.admin.domain.entity.InsuAgent;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.InsuAgentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/insurance")
public class InsuAgentController {

    private final InsuAgentService insuAgentService;

    @PostMapping(path = "/selectList")
    @ResponseBody
    public ResponseEntity<Paging> selectList(@RequestBody MultiValueMap<String,String> formData){

        return ResponseEntity.ok(insuAgentService.selectList(formData));
    }

    @GetMapping(path = "/excelFormDownload")
    public void excelForm(HttpServletResponse response){

        insuAgentService.excelFormDownload(response);
    }

    @PostMapping(path = "/excelUpload")
    @ResponseBody
    public List<ExcelAgentResDto> excelUpload(MultipartHttpServletRequest request) throws IOException {

        List<ExcelAgentResDto> excelList = insuAgentService.excelUpload(request);



        return excelList;
    }


    @PostMapping(path = "/excelSave")
    @ResponseBody
    public List<InsuAgentResDto> excelSave(@RequestBody List<InsuAgentReqDto> params) throws IOException {

        List<InsuAgentResDto> res = insuAgentService.excelSave(params);

        return res;
    }


    @PostMapping(path = "/insuSave")
    @ResponseBody
    public Long insuSave(@RequestBody InsuAgentReqDto params) throws IOException {

        Long res = insuAgentService.insuSave(params);

        return res;
    }

    @GetMapping(path = "/selectOne")
    @ResponseBody
    public InsuAgentResDto selectOne(@RequestParam("id") long id){
        return insuAgentService.selectOne(id);
    }

    @PutMapping(path = "/insuUpdate")
    @ResponseBody
    public long insuUpdate(@RequestParam("id") long id, @RequestBody InsuAgentReqDto params){
        return insuAgentService.insuUpdate(id, params);
    }

    @PutMapping(path = "/insuDelete")
    @ResponseBody
    public long insuDelete(@RequestParam(value = "id[]") List<Long> id){

        long res = insuAgentService.batchUpdate(id, "tb_insu_agent");

        return res;
    }
}
