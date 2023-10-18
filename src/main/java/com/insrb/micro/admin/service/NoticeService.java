package com.insrb.micro.admin.service;

import com.insrb.micro.admin.domain.dto.request.NoticeReqDto;
import com.insrb.micro.admin.domain.dto.response.NoticeResDto;
import com.insrb.micro.admin.domain.entity.Notice;
import com.insrb.micro.admin.repository.DeleteBatchRepository;
import com.insrb.micro.admin.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
/**
 * 정책정보 서비스
 */

@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;

    private final DeleteBatchRepository deleteBatchRepository;
    PasswordEncoder passwordEncoder;
    //리스트
    @Transactional
    public List<NoticeResDto> getNoticeList(){
        List<Notice> notice = noticeRepository.findAll();
        return notice.stream().map(NoticeResDto::new).collect(Collectors.toList());
    }

    public void deleteById(Long id) {
        noticeRepository.deleteById(id);
    }

    //관리자 등록
    @Transactional
    public long save(NoticeReqDto params) {
        Notice entity = noticeRepository.save(params.toEntity());
        return entity.getId();
    }
    //관리자 비활성화
    public long batchDelete(List<Long> id) {
        deleteBatchRepository.batchUpdate(id, "tb_notice");

        return id.size();
    }

    //관리자 상세
    @Transactional
    public NoticeResDto selectOne(long id) {
        Notice entity = noticeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));

        return new NoticeResDto(entity);
    }
    //관리자 수정
    @Transactional
    public Long update(long id, NoticeReqDto params) {
        Notice entity = noticeRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
        entity.update(params.getPolicy(),params.getTitle(), params.getContent(), params.getDeleteYn());
        return id;
    }









}
