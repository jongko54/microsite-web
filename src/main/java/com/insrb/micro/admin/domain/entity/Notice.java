package com.insrb.micro.admin.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)  //파라미터 없는 생성자 생성 어노테이션
@Table(name = "tb_notice")
@Entity
public class Notice extends CommonEntity {

    @Id //primary key 컬럼에 붙여주는 어노테이션 필수
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment 를 사용하기 위한 어노테이션
    private Long id;
    private String policy;
    private String title;
    private String content;
    private char deleteYn;

    @Builder
    public Notice(int id, char deleteYn, String policy,String title,String content){
        this.id         = (long) id;
        this.policy     = policy;
        this.title      = title;
        this.content    = content;
        this.deleteYn   = deleteYn;
    }

    public void update(String policy, String title,String content, char deleteYn ){
        this.policy   = policy;
        this.title    = title;
        this.content  = content;
        this.deleteYn = deleteYn;
    }
}
