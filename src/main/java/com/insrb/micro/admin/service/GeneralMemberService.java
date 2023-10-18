package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.GeneralMemberReqDto;
import com.insrb.micro.admin.domain.dto.response.GeneralMemberResDto;
import com.insrb.micro.admin.domain.entity.GeneralMember;
import com.insrb.micro.admin.domain.entity.common.Paging;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.GeneralMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 일반회원 서비스 로직
 * */

@Service
@RequiredArgsConstructor
public class GeneralMemberService {


    private final GeneralMemberRepository gmRepository;

    private final DeleteBatchRepository deleteBatchRepository;

    PasswordEncoder passwordEncoder;

    public void deleteById(Long id) {
        gmRepository.deleteById(id);
    }

    //관리자 목록 리스트
    @Transactional
    public Paging getGmList(MultiValueMap<String, String> formData){

        int draw = Integer.parseInt(formData.get("draw").get(0));//dataTable 순차적으로 그려지는 것을 보장
        int start = Integer.parseInt(formData.get("start").get(0));//페이징 첫번째 레코드 값
        int length = Integer.parseInt(formData.get("length").get(0));//현재 페이지 레코드 수
        int page =  start / length;

        Paging pagingDto = new Paging();

        //page = offset , length = limit
        Pageable pageable = PageRequest.of(page, length, Sort.by(Sort.Direction.DESC, "id"));

        String searchUserNameValue = formData.get("columns[3][search][value]").get(0);//검색 변수 값
        System.out.println(formData.get("columns[3][search][value]").get(0));
        String searchUserIdValue = formData.get("columns[2][search][value]").get(0);
        System.out.println(formData.get("columns[2][search][value]").get(0));
        Page<GeneralMember> list = null;

        //검색 값 여부에 따라 분기 처리
        if(!searchUserNameValue.isEmpty()){
            //타이틀 검색 like sql
            list = gmRepository.findAllByUserNameContaining(pageable, searchUserNameValue);
        }else if (!searchUserIdValue.isEmpty()) {
            //작성자 검색 like sql
            list = gmRepository.findAllByUserIdContaining(pageable, searchUserIdValue);
        }else{
            //전체 검색x
            list = gmRepository.findAll(pageable);
        }

        List<GeneralMemberResDto> listToDto = list.stream().map(GeneralMemberResDto::new).collect(Collectors.toList());


        int total = Long.valueOf(list.getTotalElements()).intValue();

        pagingDto.setDraw(draw);
        pagingDto.setRecordsFiltered(total);
        pagingDto.setRecordsTotal(total);
        pagingDto.setData(listToDto);


        return pagingDto;
    }
    //관리자 등록
    @Transactional
    public long save(GeneralMemberReqDto params) {
        GeneralMember entity = gmRepository.save(params.toEntity());
        return entity.getId();
    }
    //관리자 비활성화
    public long batchDelete(List<Long> id) {
        deleteBatchRepository.batchUpdate(id, "tb_user");

        return id.size();
    }
//    //관리자 상세
    @Transactional
    public GeneralMemberResDto selectOne(long id) {
        GeneralMember entity = gmRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

        return new GeneralMemberResDto(entity);
    }
//    //관리자 수정
    @Transactional
    public Long update(long id, GeneralMemberReqDto params) {
        GeneralMember entity = gmRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
        entity.update(params.getPhoneRole(),params.getUserName(), params.getDeleteYn());
        return id;
    }
}
