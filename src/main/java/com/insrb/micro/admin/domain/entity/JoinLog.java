package com.insrb.micro.admin.domain.entity;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "tb_join_log")
public class JoinLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userId;
    private LocalDateTime joinDate;
    private LocalDateTime logoutDate;
    private String task;
    private String joinIp;

    @Builder
    public JoinLog(String userId, LocalDateTime joinDate,  String task, String joinIp) {
        this.userId = userId;
        this.joinDate = joinDate;
        this.task = task;
        this.joinIp = joinIp;
    }

    public void logoutDateUpdate(LocalDateTime logoutDate){
        this.logoutDate = logoutDate;
    }
}
