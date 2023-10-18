package com.insrb.micro.admin.repository;

import com.insrb.micro.admin.config.jpa.AuditConfig;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class DeleteBatchRepository {

    private final JdbcTemplate jdbcTemplate;
    private final AuditConfig auditConfig;


    public DeleteBatchRepository(JdbcTemplate jdbcTemplate, AuditConfig auditConfig){
        this.jdbcTemplate = jdbcTemplate;
        this.auditConfig = auditConfig;
    }

    public void batchUpdate(List<Long> list, String tableName){
        String updatedName = auditConfig.getCurrentAuditor().get();
        jdbcTemplate.batchUpdate(
                    "UPDATE "+tableName
                        +" SET delete_yn='Y'"
                        + ",updated_date=now()"
                        + ",updated_by= ?"
                        + " WHERE id = ?",
                new BatchPreparedStatementSetter(){
                    @Override
                    public void setValues(PreparedStatement ps, int i) throws SQLException {
                        ps.setString(1,updatedName);
                        ps.setLong(2,list.get(i));
                    }

                    @Override
                    public int getBatchSize() {
                        return list.size();
                    }
                });

    }

}
