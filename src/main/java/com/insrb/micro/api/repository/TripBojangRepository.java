package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.TripBojang;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TripBojangRepository extends JpaRepository<TripBojang, Long> {
    List<TripBojang> findBybFlagOrderByCategoryAscOrderAsc(char bFlag);
}
