package com.insrb.micro.admin.repository;


import com.insrb.micro.admin.domain.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PolicyRepository extends JpaRepository<Policy, Long> {

    Policy findById(String id);
}
