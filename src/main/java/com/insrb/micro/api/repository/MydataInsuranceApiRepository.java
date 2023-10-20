package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.MydataInsuranceApi;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MydataInsuranceApiRepository extends JpaRepository<MydataInsuranceApi, Long> {

  List<MydataInsuranceApi> findAllById(String id, Sort sort);

}
