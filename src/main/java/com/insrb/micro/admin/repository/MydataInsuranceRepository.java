package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.dto.response.MydataInsuranceResDto;
import com.insrb.micro.admin.domain.entity.MydataInsurance;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MydataInsuranceRepository extends JpaRepository<MydataInsurance, Long> {
   //@Query("select c from MydataInsurance c where c.insuranceTitle = :insuranceTitle")
  //List<MydataInsurance> test(@Param("insuranceTitle") String insuranceTitle);

  Page<MydataInsurance> findAllByMydataInsuranceTitleContaining(Pageable pageable, String searchMydataInsuranceTitleValue);

  Page<MydataInsurance> findAllByCreatedByContaining(Pageable pageable, String searchCreatedByValue);

  //Page<MydataInsurance> findAllKeywordByContaining(Pageable pageable, String searchCreatedByValue);

//  List<MydataInsurance>


}
