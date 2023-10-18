package com.insrb.micro.api.repository;

import com.insrb.micro.api.domain.entity.Sms;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SmsRepository extends JpaRepository<Sms, Long> {

    Optional<Sms> findByMessageIdAndAuthKey(String messageId, String authKey);
    Optional<Sms> findByMessageId(String messageId);
}
