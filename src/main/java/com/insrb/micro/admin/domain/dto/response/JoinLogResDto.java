package com.insrb.micro.admin.domain.dto.response;


import com.insrb.micro.admin.domain.entity.JoinLog;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class JoinLogResDto {

    private long id;
    private String userId;
    private LocalDateTime joinDate;
    private LocalDateTime logoutDate;
    private String task;
    private String joinIp;


    public JoinLogResDto(JoinLog entity){
        id = entity.getId();
        userId = entity.getUserId();
        joinDate = entity.getJoinDate();
        logoutDate = entity.getLogoutDate();
        task = entity.getTask();
        joinIp = entity.getJoinIp();
    }
}
