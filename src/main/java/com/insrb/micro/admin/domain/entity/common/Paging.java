package com.insrb.micro.admin.domain.entity.common;

import lombok.Data;

import java.util.List;

@Data
public class Paging {

    private int draw;
    private int recordsTotal;
    private int recordsFiltered;
    private List data;
}
