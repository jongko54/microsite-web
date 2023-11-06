package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.MydataInsurance;
import com.insrb.micro.api.domain.entity.DomesticTourApi;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DomesticTourRepository extends JpaRepository<DomesticTourApi, Long> {

  Page<DomesticTourApi> findAllByEmailContaining(Pageable pageable, String searchEmailValue);

  Page<DomesticTourApi> findAllByCreatedByContaining(Pageable pageable, String searchCreatedByValue);

}
