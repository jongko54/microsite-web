package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.DomesticTourApi;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DomesticTourApiRepository extends JpaRepository<DomesticTourApi, Long> {

    List<DomesticTourApi> findAllByUserIdOrderByCreatedDateDesc(long userId);

}
