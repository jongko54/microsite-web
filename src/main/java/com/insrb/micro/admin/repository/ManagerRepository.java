package com.insrb.micro.admin.repository;


import com.insrb.micro.admin.domain.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepository extends JpaRepository<Manager, Long> {
   Manager findByUserId(String id);
}
