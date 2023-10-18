package com.insrb.micro.utils;

import com.insrb.micro.api.exception.CustomException;
import com.insrb.micro.api.exception.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Slf4j
@Component
public class ExcelUtils {

    //각 셀의 데이터타입에 맞게 가져오기
    public String getCellValue(XSSFCell cell){

        String value = "";

        if(cell == null){
            return value;
        }

        switch (cell.getCellType()){
            case STRING:
                value = cell.getStringCellValue();
                break;
            case NUMERIC:
                value = (int) cell.getNumericCellValue() + "";
                break;
            default:
                break;
        }

        return value;
    }

    //엑셀데이터 리스트 파싱
    public List<Map<String,Object>> getListData(MultipartFile file, int startRowNum, int columnLength, String[] HEADER) throws IOException {
         List<Map<String,Object>> excelList = new ArrayList<Map<String,Object>>();
         OPCPackage opcPackage = null;

         try{

                 opcPackage = OPCPackage.open(file.getInputStream());

                 @SuppressWarnings("resource")
                 XSSFWorkbook workbook = new XSSFWorkbook(opcPackage);

                 //첫번째 시트
                 XSSFSheet sheet = workbook.getSheetAt(0);

                 List<String> headerList = new ArrayList<>(Arrays.asList(HEADER));



//                 if(headerList.containsAll(Arrays.asList(sheet.getRow(0).getCell(0),
//                         sheet.getRow(0).getCell(1), sheet.getRow(0).getCell(2)))){
//                     System.out.println("헤더 값 같음");
//                 }else{
//                     System.out.println("헤더 값 다르다@@@");
//                 }
//
//                 if(sheet.getRow(0).getCell(0).equals("회사명") || sheet.getRow(0).getCell(1).equals("비즈로보ID")
//                         || sheet.getRow(0).getCell(2).equals("이름")){
//                     System.out.println("헤더 값 다름 에러발생");
//                 }

                     System.out.println(sheet.getRow(0).getCell(0));
                     System.out.println(sheet.getRow(0).getCell(1));
                     System.out.println(sheet.getRow(0).getCell(2));

                 int rowIndex = 0;
                 int columnIndex = 0;

                 //첫번째 행은(0) 헤더이기 때문에 두번째 행(1)부터 검색
                 for(rowIndex = startRowNum; rowIndex < sheet.getLastRowNum()+1; rowIndex++){
                     XSSFRow row = sheet.getRow(rowIndex);


                     //빈행은 스킵
                     if(row.getCell(0) != null && !row.getCell(0).toString().isBlank()){
                        Map<String, Object> map = new HashMap<>();

                        int cells = columnLength;

                        for(columnIndex= 0; columnIndex <= cells; columnIndex++){
                            XSSFCell cell = row.getCell(columnIndex);
                            map.put(String.valueOf(columnIndex), getCellValue(cell));

                        }

                        excelList.add(map);
                     }

                 }



         }catch (InvalidFormatException e){
             e.printStackTrace();
         } catch (IOException e) {
             e.printStackTrace();
         }finally {
             opcPackage.close();
         }


        return excelList;
    }


}
