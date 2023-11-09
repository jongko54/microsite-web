package com.insrb.micro.api.repository;

import com.insrb.micro.admin.domain.entity.MydataUser;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MydataUserApiRepository extends JpaRepository<MydataUser, Long> {

  List<MydataUser> findAllById(long id, Sort id1);

  Optional<MydataUser> findByUserNameAndPhoneRole(String userName,String phoneRole);
}
