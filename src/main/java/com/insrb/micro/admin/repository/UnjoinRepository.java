package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.InsuAgent;
import com.insrb.micro.admin.domain.entity.Unjoin;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UnjoinRepository extends JpaRepository<Unjoin, Long> {

    Page<Unjoin> findAllByPolholderContaining(Pageable pageable, String searchBusinessValue);
    Page<Unjoin> findAllByBusinessNumberContaining(Pageable pageable, String searchBusinessValue);
}
