package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.domain.entity.Community;
import com.insrb.micro.admin.domain.entity.GeneralMember;
import com.insrb.micro.admin.domain.entity.InsuAgent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GeneralMemberRepository extends JpaRepository<GeneralMember, Long> {
    GeneralMember findByUserId(String id);

    List<GeneralMember> findUserIdByUserIdIn(@Param("listId") List<String> listId);

//    @Query("select c from Community c where c.category = :category")
//    List<GeneralMember> test(@Param("userName") String userName);
    Page<GeneralMember> findAllByUserNameContaining(Pageable pageable, String searchUserNameValue);

    Page<GeneralMember> findAllByUserIdContaining(Pageable pageable, String searchUserIdValue);

}
