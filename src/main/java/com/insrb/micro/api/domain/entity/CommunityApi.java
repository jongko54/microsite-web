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
@Table(name = "tb_community")
public class CommunityApi extends CommonEntity {

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
    public CommunityApi(String category, String code , String title, String content, String writer, char deleteYn){
        this.category = category;
        this.code = code;
        this.title = title;
        this.content = content;
        this.deleteYn = deleteYn;
    }

}
