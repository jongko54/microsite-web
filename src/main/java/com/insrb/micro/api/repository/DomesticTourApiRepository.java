package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.DomesticTourApi;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DomesticTourApiRepository extends JpaRepository<DomesticTourApi, Long> {


    List<DomesticTourApi> findAllByUserIdAndDeleteYnOrderByCreatedDateDesc(long userId, char deleteYn);

    Optional<DomesticTourApi> findByIdAndUserIdAndDeleteYn(long id, long userId, char deleteYn);

}
