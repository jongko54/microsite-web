package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.Community;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {


    @Query("select c from Community c where c.category = :category")
    List<Community> test(@Param("category") String category);

    Page<Community> findAllByTitleContaining(Pageable pageable, String searchTitleValue);

    Page<Community> findAllByCreatedByContaining(Pageable pageable, String searchCreatedByValue);
}
