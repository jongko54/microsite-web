package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {

    Notice findById(String id);
}
