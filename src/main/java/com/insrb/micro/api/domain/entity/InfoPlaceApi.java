package com.insrb.micro.api.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "tb_infoPlace")
public class InfoPlaceApi extends CommonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String content;
    @Column(name = "deleteYn")
    private char deleteYn;

    @Builder
    public InfoPlaceApi(String title, String content, char deleteYn){
        this.title = title;
        this.content = content;
        this.deleteYn = deleteYn;
    }
}
