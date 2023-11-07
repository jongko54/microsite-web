package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.SimpleCalc;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SimpleCalcApiRepository extends JpaRepository<SimpleCalc, Long> {

  List<SimpleCalc> findByAgeAndSexAndPeriod(String age, char sex, String period);
}