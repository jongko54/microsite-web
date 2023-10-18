package com.insrb.micro.api.repository;

import com.insrb.micro.admin.domain.entity.InsuAgent;
import com.insrb.micro.api.domain.entity.InsuAgentApi;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface InsuAgentApiRespository extends JpaRepository<InsuAgentApi, Long> {

    @Query("select distinct NEW InsuAgentApi(c.companyName) from InsuAgentApi c")
    List<InsuAgentApi> findCompany();

    Optional<InsuAgentApi> findAllByInsuId(String insuId);

}
