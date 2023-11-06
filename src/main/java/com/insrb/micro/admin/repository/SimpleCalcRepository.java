package com.insrb.micro.admin.repository;

import com.insrb.micro.api.domain.entity.SimpleCalc;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SimpleCalcRepository extends JpaRepository<SimpleCalc, Long> {

}
