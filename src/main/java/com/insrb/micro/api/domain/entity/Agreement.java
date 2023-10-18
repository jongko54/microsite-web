package com.insrb.micro.api.domain.entity;


import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Table(name = "tb_agreement")
@Entity
public class Agreement extends CommonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String agreementTitle;
    private String agreementContent;
    private char importantYn;
    private char deleteYn;

    @Builder
    public Agreement(String agreementTitle, String agreementContent, char importantYn, char deleteYn){
        this.agreementTitle = agreementTitle;
        this.agreementContent = agreementContent;
        this.importantYn = importantYn;
        this.deleteYn = deleteYn;
    }

}
