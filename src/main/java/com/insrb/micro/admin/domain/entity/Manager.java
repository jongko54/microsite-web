package com.insrb.micro.admin.domain.entity;

import com.insrb.micro.admin.domain.entity.common.CommonEntity;
import lombok.*;

import javax.persistence.*;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)  //파라미터 없는 생성자 생성 어노테이션
@Table(name = "tb_manager")
@Entity
public class Manager extends CommonEntity {

        @Id //primary key 컬럼에 붙여주는 어노테이션 필수
        @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment 를 사용하기 위한 어노테이션
        private Long id;
        private String userId;
        private String userPw;
        private String phoneRole;
        private char deleteYn;

//        @Column(name = "created_date")
//        private LocalDateTime createdDate;

        @Builder
        public Manager(int id, String userId, String userPw, String phoneRole, char deleteYn){
                this.id = (long) id;
                this.userId = userId;
                this.userPw = userPw;
                this.phoneRole = phoneRole;
                this.deleteYn = deleteYn;
                //this.createdDate = createdDate;
        }

        public void update(String phoneRole, char deleteYn ){
                //this.userId = userId;
                //this.userPw = userPw;
                this.phoneRole = phoneRole;
                this.deleteYn = deleteYn;

        }

}
