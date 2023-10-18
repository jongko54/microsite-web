package com.insrb.micro.admin.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * 설계사 목록 테이블 엔티티
 */

@Entity
@Table(name = "tb_insu_agent")
@Getter
@NoArgsConstructor
public class InsuAgent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String companyName;
    private String insuId;
    private String insuName;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime regdate;

    private char deleteYn;


    @Builder
    public InsuAgent(long id, String companyName, String insuId, String insuName, LocalDateTime regdate, char deleteYn) {
        this.companyName = companyName;
        this.insuId = insuId;
        this.insuName = insuName;
        this.regdate = regdate;
        this.deleteYn = deleteYn;
    }

    public void update(String companyName,String insuId, String insuName, char deleteYn){
        this.companyName = companyName;
        this.insuId = insuId;
        this.insuName = insuName;
        this.deleteYn = deleteYn;
    }


}
