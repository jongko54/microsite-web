package com.insrb.micro.admin.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)  //파라미터 없는 생성자 생성 어노테이션
@Table(name = "tb_infoplace")
@Entity
public class InfoPlace extends CommonEntity {

    @Id //primary key 컬럼에 붙여주는 어노테이션 필수
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment 를 사용하기 위한 어노테이션
    private Long id;
    private String title;
    private String content;
    private char deleteYn;

    @Builder
    public InfoPlace(int id, char deleteYn,String title,String content){
        this.id         = (long) id;
        this.title      = title;
        this.content    = content;
        this.deleteYn   = deleteYn;
    }

    public void update(String title,String content, char deleteYn ){
        this.title    = title;
        this.content  = content;
        this.deleteYn = deleteYn;
    }
}
