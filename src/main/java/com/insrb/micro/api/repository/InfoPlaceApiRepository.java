package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.InfoPlaceApi;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InfoPlaceApiRepository extends JpaRepository<InfoPlaceApi, Long> {

    List<InfoPlaceApi> findAllByTitle(String title, Sort sort);
}
