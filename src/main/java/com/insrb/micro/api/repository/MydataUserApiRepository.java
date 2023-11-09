package com.insrb.micro.api.repository;

import com.insrb.micro.admin.domain.entity.MydataUser;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MydataUserApiRepository extends JpaRepository<MydataUser, Long> {

  List<MydataUser> findAllById(long id, Sort id1);

  //boolean existsByPhoneRoleAndUserName();

  boolean existsMydataUserByUserNameAndPhoneRole(String userName,String phoneRole);
}
