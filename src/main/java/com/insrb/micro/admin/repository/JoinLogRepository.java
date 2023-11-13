package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.JoinLog;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface JoinLogRepository extends JpaRepository<JoinLog, Long> {


    Optional<JoinLog> findTopByUserIdOrderByJoinDateDesc(String userId);
}
