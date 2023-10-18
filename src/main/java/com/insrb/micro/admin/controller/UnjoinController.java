package com.insrb.micro.admin.controller;

import com.insrb.micro.admin.domain.dto.response.UnjoinResDto;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.service.UnjoinService;
import com.insrb.micro.utils.cyper.UserInfoCyper;
import com.nimbusds.openid.connect.sdk.claims.UserInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/unjoin")
public class UnjoinController {

    private final UnjoinService unjoinService;

    @PostMapping(path = "/unjoinList")
    @ResponseBody
    public ResponseEntity<Paging> selectList(@RequestBody MultiValueMap<String, String> formData) throws Exception {

        return ResponseEntity.ok(unjoinService.selectList(formData));
    }

    @GetMapping(path = "/selectOne")
    @ResponseBody
    public UnjoinResDto selectList(@RequestParam("id") long id) throws Exception {

        UnjoinResDto res = unjoinService.selectOne(id);

        res.setRegi_birth_back(UserInfoCyper.DecryptInfo(res.getRegi_birth_back()));
        res.setMobile(UserInfoCyper.DecryptInfo(res.getMobile()));

        return res;
    }

    @GetMapping(path = "/excelDownload")
    public void excelDownload(HttpServletResponse response) throws IOException {
        unjoinService.excelDownload(response);

    }



}
