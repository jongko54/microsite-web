package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.InfoPlace;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InfoPlaceRepository extends JpaRepository<InfoPlace, Long> {

    @Query("select c from InfoPlace c where c.title = :title")
    List<InfoPlace> test(@Param("title") String title);

    Page<InfoPlace> findAllByTitleContaining(Pageable pageable, String searchTitleValue);

    Page<InfoPlace> findAllByCreatedByContaining(Pageable pageable, String searchCreatedByValue);

}
