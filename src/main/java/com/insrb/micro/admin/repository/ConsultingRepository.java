package com.insrb.micro.admin.repository;

import com.insrb.micro.api.domain.entity.Consulting;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultingRepository extends JpaRepository<Consulting, Long> {

    Page<Consulting> findAllByNameContaining(Pageable pageable, String searchTitleValue);

    Page<Consulting> findAllByBusinessContaining(Pageable pageable, String searchCreatedByValue);
}
