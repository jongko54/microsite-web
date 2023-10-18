package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.Agreement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgreementRepository extends JpaRepository<Agreement, Long> {
}
