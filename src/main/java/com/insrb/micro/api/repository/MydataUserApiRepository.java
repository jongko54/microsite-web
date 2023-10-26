package com.insrb.micro.api.repository;

import com.insrb.micro.admin.domain.entity.MydataUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MydataUserApiRepository extends JpaRepository<MydataUser, Long> {

}
