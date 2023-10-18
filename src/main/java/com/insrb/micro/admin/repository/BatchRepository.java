package com.insrb.micro.admin.repository;


import com.insrb.micro.admin.domain.entity.Batch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BatchRepository extends JpaRepository<Batch, Long> {
}
