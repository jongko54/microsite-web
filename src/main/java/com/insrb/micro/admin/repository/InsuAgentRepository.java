package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.InsuAgent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InsuAgentRepository extends JpaRepository<InsuAgent, Long> {

    Page<InsuAgent> findAllByCompanyNameContaining(Pageable pageable, String searchCompanyValue);
    Page<InsuAgent> findAllByInsuIdContaining(Pageable pageable, String searchInsuIdValue);
    Page<InsuAgent> findAllByInsuNameContaining(Pageable pageable, String searchInsuNameValue);

}
