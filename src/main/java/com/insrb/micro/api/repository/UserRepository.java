package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.dto.response.ProfileResponseDto;
import com.insrb.micro.api.domain.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUserId(String userId);
    Optional<User> findByUserIdAndLoginType(String userId, String loginType);
    List<User> findAllByPhoneRoleAndDeleteYn(String mobile, char deleteYn);

    Optional<User> findById(long id);

    @Query("select distinct u from User u left join fetch u.insuAgent where u.id =:id")
    public User findByMyprofile(long id);


}
