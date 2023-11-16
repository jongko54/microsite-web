package com.insrb.micro.admin.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonObject;
import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.UUID;


@Slf4j
@Controller
@RequestMapping("/admin")
public class FileManageController {

    @Value("${file.path}")
    private String root;

    @PostMapping(value="/uploadSummernoteImageFile", produces = "application/json")
    @ResponseBody
    public String uploadSummernoteImageFile(@RequestParam("file") MultipartFile multipartFile, @RequestParam("name") String name) throws JsonProcessingException {

        log.info("Editor Image Upload {}", multipartFile.getOriginalFilename());


        String fileRoot = root+name+"/";	//저장될 파일 경로

        String originalFileName = multipartFile.getOriginalFilename();	//오리지날 파일명

        if(originalFileName == null){
            throw new CustomException(ErrorCode.BAD_REQUEST);
        }

        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));	//파일 확장자

        // 랜덤 UUID+확장자로 저장될 savedFileName
        String savedFileName = UUID.randomUUID() + extension;

        File targetFile = null;

        if(extension.equals("doc") || extension.equals("pdf") || extension.equals("hwp") ||
             extension.equals("xls")){
            throw new CustomException(ErrorCode.BAD_REQUEST);
        }

        targetFile = new File(fileRoot + savedFileName);

        HashMap<String, Object> res = new HashMap<>();
        res.put("url","/summernoteImage/"+ name + "/" + savedFileName);
        res.put("responseCode","success");
        ObjectMapper objectMapper = new ObjectMapper();

        String jsonString = null;
        try {
            jsonString = objectMapper.writeValueAsString(res);

            InputStream fileStream = multipartFile.getInputStream();
            FileUtils.copyInputStreamToFile(fileStream, targetFile);	//파일 저장

        } catch (IOException e) {
            FileUtils.deleteQuietly(targetFile);	// 실패시 저장된 파일 삭제
            res.put("responseCode", "error");
            jsonString = objectMapper.writeValueAsString(res);

            System.out.println("IOException 파일 업로드 예외 발생");
        }

        return jsonString;
    }

}
