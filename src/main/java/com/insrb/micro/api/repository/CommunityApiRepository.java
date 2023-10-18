package com.insrb.micro.api.repository;


import com.insrb.micro.api.domain.entity.CommunityApi;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityApiRepository extends JpaRepository<CommunityApi, Long> {

    List<CommunityApi> findAllByCode(String category, Sort sort);

}
