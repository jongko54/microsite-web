package com.insrb.micro.api.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tb_consulting")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Consulting extends CommonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phoneRole;
    private String business;
    private char consultingYn;
    private LocalDateTime consultingSuccessDate;
    private char deleteYn;

    @Builder
    public Consulting(String name, String phoneRole, String business, char consultingYn, char deleteYn){
        this.name = name;
        this.phoneRole = phoneRole;
        this.business = business;
        this.consultingYn = consultingYn;
        this.deleteYn = deleteYn;
    }
}

