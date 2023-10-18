package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.response.CommunityResDto;
import com.insrb.micro.admin.domain.dto.response.UnjoinResDto;
import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.Unjoin;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.UnjoinRepository;
import com.insrb.micro.utils.cyper.UserInfoCyper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.hssf.usermodel.HSSFDataFormat;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.hibernate.event.spi.SaveOrUpdateEvent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class UnjoinService {

    private final UnjoinRepository unjoinRepository;

    @Transactional
    public Paging selectList(MultiValueMap<String, String> formData) throws Exception{

        int draw = Integer.parseInt(formData.get("draw").get(0));
        int start = Integer.parseInt(formData.get("start").get(0));
        int length = Integer.parseInt(formData.get("length").get(0));
        int page =  start / length;

        Paging pagingDto = new Paging();

        //page = offset , length = limit
        Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC,"regdate"));

        String searchNameValue = formData.get("columns[2][search][value]").get(0);
        String searchBusinessNumValue = formData.get("columns[4][search][value]").get(0);
        Page<Unjoin> list = null;

        //검색 값 여부에 따라 분기 처리
        if(!searchNameValue.isEmpty()){
            //타이틀 검색 like sql
            list = unjoinRepository.findAllByPolholderContaining(pageable, searchNameValue);

        }else if (!searchBusinessNumValue.isEmpty()) {
            //작성자 검색 like sql
            list = unjoinRepository.findAllByBusinessNumberContaining(pageable, searchBusinessNumValue);

        }else{
            //전체 검색x
            list = unjoinRepository.findAll(pageable);
        }

        List<UnjoinResDto> listToDto = list.stream().map(UnjoinResDto::new).collect(Collectors.toList());

        int total = Long.valueOf(list.getTotalElements()).intValue();


        listToDto.forEach(data -> {
            try {
                data.setMobile(UserInfoCyper.DecryptInfo(data.getMobile()));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });

        pagingDto.setDraw(draw);
        pagingDto.setRecordsFiltered(total);
        pagingDto.setRecordsTotal(total);
        pagingDto.setData(listToDto);

        return pagingDto;
    }


    public void excelDownload(HttpServletResponse response) throws IOException {



        List<Unjoin> entity = unjoinRepository.findAll(Sort.by(Sort.Direction.DESC,"regdate"));

        List<UnjoinResDto> list = entity.stream().map(UnjoinResDto::new).collect(Collectors.toList());


        try{
            Workbook workbook = new SXSSFWorkbook();
            Sheet sheet = workbook.createSheet("미가입자 목록");

            //숫자 포맷 적용
            CellStyle cellStyle = workbook.createCellStyle();
            cellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("#,##0"));

            //파일명
            final String FILE_NAME = "미가입자 분류";

            //헤더
            final String[] HEADER = {"제휴코드","이름", "주민등록번호(앞)", "주민등록번호(뒤)","휴대폰번호", "주소","상세주소","업종","사업자번호","상호명","소유여부","면적","시작층"
                                    ,"끝층","가입일시"};
            Row row = sheet.createRow(0);

            for(int i=0; i<HEADER.length; i++){
                Cell cell = row.createCell(i);
                cell.setCellValue(HEADER[i]);
            }

            createRowData(sheet, list);

            response.setHeader("Content-Disposition", "attachment;filename="+ URLEncoder.encode(FILE_NAME,"UTF-8")+".xlsx");

            ServletOutputStream out = response.getOutputStream();
            workbook.write(out);
            out.close();

            response.getOutputStream().flush();
            response.getOutputStream().close();



        }catch (IOException e){
            e.printStackTrace();
        }

    }

    public void createRowData(Sheet sheet, List<UnjoinResDto> list){

        int rownum = 1;
        int cellnum = 0;

        list.forEach(m->{
            try {
                m.setMobile(UserInfoCyper.DecryptInfo(m.getMobile().toString()));
                m.setRegi_birth_back(UserInfoCyper.DecryptInfo(m.getRegi_birth_back().toString()));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });

        List<String> dataKey = new ArrayList<>();
        dataKey.add("flag");
        dataKey.add("polholder");
        dataKey.add("regi_birth_front");
        dataKey.add("regi_birth_back");
        dataKey.add("mobile");
        dataKey.add("address");
        dataKey.add("detail_address");
        dataKey.add("business_type");
        dataKey.add("business_number");
        dataKey.add("business_name");
        dataKey.add("business_owner");
        dataKey.add("area");
        dataKey.add("floor_low");
        dataKey.add("floor_high");
        dataKey.add("regdate");


        for(int i=0; i<list.size(); i++){
            Row test = sheet.createRow(rownum++);
            Map<String, Object> map = new HashMap<>();
            map.put("flag",list.get(i).getFlag());
            map.put("polholder",list.get(i).getPolholder());
            map.put("regi_birth_front",list.get(i).getRegi_birth_front());
            map.put("regi_birth_back",list.get(i).getRegi_birth_back());
            map.put("mobile",list.get(i).getMobile());
            map.put("address",list.get(i).getAddress());
            map.put("detail_address",list.get(i).getDetail_addr());
            map.put("business_type",list.get(i).getBusiness_type());
            map.put("business_number",list.get(i).getBusiness_number());
            map.put("business_name",list.get(i).getBusiness_name());
            map.put("business_owner",list.get(i).getBusiness_owner());
            map.put("area",list.get(i).getArea());
            map.put("floor_low",list.get(i).getFloor_low());
            map.put("floor_high",list.get(i).getFloor_high());
            map.put("regdate",list.get(i).getRegdate());

            cellnum = 0;

            for(String arr : dataKey){
                Cell dataCell = test.createCell(cellnum++);
                dataCell.setCellValue(map.get(arr).toString());
            }

        }



    }

    public UnjoinResDto selectOne(long id) {
        Unjoin entity = unjoinRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글잊 존재하지 않습니다."));


        return new UnjoinResDto(entity);
    }
}
