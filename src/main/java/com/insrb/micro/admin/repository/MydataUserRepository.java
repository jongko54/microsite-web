package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.MydataUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MydataUserRepository extends JpaRepository<MydataUser, Long> {

  Page<MydataUser> findAllByUserEmailContaining(Pageable pageable, String searchUserEmailValue);

  Page<MydataUser> findAllByCreatedByContaining(Pageable pageable, String searchCreatedByValue);

}
