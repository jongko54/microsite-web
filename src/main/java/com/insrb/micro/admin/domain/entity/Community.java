package com.insrb.micro.admin.domain.entity;


import com.insrb.micro.admin.config.security.MemberDetails;
import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "tb_community")
public class Community extends CommonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String category;

    private String code;

    private String title;

    private String content;

    @Column(name = "delete_yn")
    private char deleteYn;

    @Builder
    public Community(String category, String code, String title, String content, String writer, char deleteYn){
        this.category = category;
        this.code = code;
        this.title = title;
        this.content = content;
        this.deleteYn = deleteYn;
    }

    public void update(String category, String code, String title, String content, char deleteYn){
        this.category = category;
        this.code = code;
        this.title = title;
        this.content = content;
        this.deleteYn = deleteYn;
    }
}
