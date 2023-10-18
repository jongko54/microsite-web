package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.InfoPlaceApi;
import com.insrb.micro.api.domain.entity.InsuranceApi;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsuranceApiRepository extends JpaRepository<InsuranceApi, Long> {

  List<InsuranceApi> findAllById(String id, Sort sort);

}
