package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.InsuAgentReqDto;
import com.insrb.micro.admin.domain.dto.response.CommunityResDto;
import com.insrb.micro.admin.domain.dto.response.ExcelAgentResDto;
import com.insrb.micro.admin.domain.dto.response.GeneralMemberResDto;
import com.insrb.micro.admin.domain.dto.response.InsuAgentResDto;
import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.GeneralMember;
import com.insrb.micro.admin.domain.entity.InsuAgent;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.GeneralMemberRepository;
import com.insrb.micro.admin.repository.InsuAgentRepository;
import com.insrb.micro.utils.ExcelUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.hssf.usermodel.HSSFDataFormat;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MultiValueMap;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class InsuAgentService {


    private final ExcelUtils excelUtils;
    private final InsuAgentRepository insuAgentRepository;
    private final GeneralMemberRepository generalMemberRepository;
    private final DeleteBatchRepository deleteBatchRepository;


    //엑셀 헤더
    final String[] HEADER = {"회사명","비즈로보ID","이름"};

    @Transactional
    public Paging selectList(MultiValueMap<String, String> formData) {

        int draw = Integer.parseInt(formData.get("draw").get(0));
        int start = Integer.parseInt(formData.get("start").get(0));
        int length = Integer.parseInt(formData.get("length").get(0));
        int page =  start / length;

        Paging pagingDto = new Paging();

        //page = offset , length = limit
        Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC, "id"));

        String searchCompanyValue = formData.get("columns[2][search][value]").get(0);
        String searchInsuIdValue = formData.get("columns[3][search][value]").get(0);
        String searchInsuNameValue = formData.get("columns[4][search][value]").get(0);
        Page<InsuAgent> list = null;

        //검색 값 여부에 따라 분기 처리
        if(!searchCompanyValue.isEmpty()){
            //타이틀 검색 like sql
              list = insuAgentRepository.findAllByCompanyNameContaining(pageable, searchCompanyValue);

        }else if (!searchInsuIdValue.isEmpty()) {
            //작성자 검색 like sql
            list = insuAgentRepository.findAllByInsuIdContaining(pageable, searchInsuIdValue);

        }else if (!searchInsuNameValue.isEmpty()) {
            //작성자 검색 like sql
            list = insuAgentRepository.findAllByInsuNameContaining(pageable, searchInsuNameValue);

        }else{
            //전체 검색x
            list = insuAgentRepository.findAll(pageable);
        }

        List<InsuAgentResDto> listToDto = list.stream().map(InsuAgentResDto::new).collect(Collectors.toList());

        int total = Long.valueOf(list.getTotalElements()).intValue();

        pagingDto.setDraw(draw);
        pagingDto.setRecordsFiltered(total);
        pagingDto.setRecordsTotal(total);
        pagingDto.setData(listToDto);

        return pagingDto;
    }

    @Transactional
    public void excelFormDownload(HttpServletResponse response) {

        try{
            Workbook workbook = new SXSSFWorkbook();
            Sheet sheet = workbook.createSheet("설계사 가입");

            //숫자 포맷 적용
            CellStyle cellStyle = workbook.createCellStyle();
            cellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("#,##0"));

            //파일명
            final String FILE_NAME = "설계사 가입";

            Row row = sheet.createRow(0);

            for(int i=0; i<HEADER.length; i++){
                Cell cell = row.createCell(i);
                cell.setCellValue(HEADER[i]);
            }

            response.setHeader("Content-Disposition", "attachment;filename="+ URLEncoder.encode(FILE_NAME,"UTF-8")+".xlsx");

            ServletOutputStream out = response.getOutputStream();
            workbook.write(out);
            out.close();


        }catch (IOException e){
            System.out.println("IOException 엑셀 양식 다운로드 예외 발생");
        }
    }

    @Transactional
    public List<ExcelAgentResDto> excelUpload(MultipartHttpServletRequest request) throws IOException {



        MultipartFile file = null;
        Iterator<String> mIterator = request.getFileNames();
        if(mIterator.hasNext()) {
            file = request.getFile(mIterator.next());
        }

        List<ExcelAgentResDto> listData = new ArrayList<>();
        List<String> listId = new ArrayList<>();
        //
        List<Map<String,Object>> listParse = excelUtils.getListData(file, 1, 3, HEADER);

        for(Map<String,Object> map : listParse){
            ExcelAgentResDto dto = new ExcelAgentResDto();
            dto.setCompanyName(map.get("0").toString());
            dto.setInsuId(map.get("1").toString());
            dto.setInsuName(map.get("2").toString());

            listId.add(map.get("1").toString());
            listData.add(dto);
        }

        System.out.println(listId.toString());

        List<GeneralMemberResDto> bizroboId = generalMemberRepository.findUserIdByUserIdIn(listId).stream().map(GeneralMemberResDto::new).collect(Collectors.toList());

        List<String> test = new ArrayList<>();



        for(GeneralMemberResDto item : bizroboId){
            test.add(item.getUserId());
        }


        return listData;
    }

    @Transactional
    public List<InsuAgentResDto> excelSave(List<InsuAgentReqDto> params) {

        List<InsuAgent> paramsToEntity = params.stream().map(m->m.toEntity()).collect(Collectors.toList());

        List<InsuAgent> resEntity = insuAgentRepository.saveAll(paramsToEntity);

        return resEntity.stream().map(InsuAgentResDto :: new).collect(Collectors.toList());
    }

    @Transactional
    public Long insuSave(InsuAgentReqDto params) {
        InsuAgent entity = insuAgentRepository.save(params.toEntity());

        return entity.getId();
    }

    @Transactional
    public InsuAgentResDto selectOne(long id) {
        InsuAgent entity = insuAgentRepository.findById(id).orElseThrow(() -> new IllegalArgumentException());

        return new InsuAgentResDto(entity);
    }

    @Transactional
    public long insuUpdate(long id, InsuAgentReqDto params) {
        InsuAgent entity = insuAgentRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
        entity.update(params.getCompanyName(), params.getInsuId(), params.getInsuName(), params.getDeleteYn());

        return entity.getId();
    }

    public long batchUpdate(List<Long> id, String tb_insu_agent) {
        deleteBatchRepository.batchUpdate(id, tb_insu_agent);
        return id.size();
    }
}
