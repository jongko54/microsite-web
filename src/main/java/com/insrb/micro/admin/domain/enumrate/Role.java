package com.insrb.micro.admin.domain.enumrate;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Role {
    SUPER("ROLE_SUPER", "최고관리자"),
    MANAGER("ROLE_MANAGER", "관리자"),
    USER("ROLE_USER", "유저");

   private String key;
   private String name;

    public String getKey() {
        return key;
    }

    public String getName() {
        return name;
    }
}

