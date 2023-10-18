package com.insrb.micro.admin.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "BATCH_STEP_EXECUTION")
@TableGenerator(
        name = "batch_seq_table",
        table = "BATCH_STEP_EXECUTION_SEQ",
        pkColumnValue = "id", allocationSize = 1
)
public class Batch {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE,
    generator = "batch_seq_table")
    private Long stepExecutionId;
    private Long version;
    private String stepName;
    private Long jobExecutionId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String status;
    private Long commitCount;
    private Long readCount;
    private Long filterCount;
    private Long writeCount;
    private Long readSkipCount;
    private Long writeSkipCount;
    private Long processSkipCount;
    private Long rollbackCount;
    private String exitCode;
    private String exitMessage;
    private LocalDateTime lastUpdated;

    @Builder
    public Batch(Long stepExecutionId, Long version, String stepName, Long jobExecutionId, LocalDateTime startTime, LocalDateTime endTime, String status, Long commitCount, Long readCount, Long filterCount, Long writeCount, Long readSkipCount, Long writeSkipCount, Long processSkipCount, Long rollbackCount, String exitCode, String exitMessage, LocalDateTime lastUpdated) {
        this.stepExecutionId = stepExecutionId;
        this.version = version;
        this.stepName = stepName;
        this.jobExecutionId = jobExecutionId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
        this.commitCount = commitCount;
        this.readCount = readCount;
        this.filterCount = filterCount;
        this.writeCount = writeCount;
        this.readSkipCount = readSkipCount;
        this.writeSkipCount = writeSkipCount;
        this.processSkipCount = processSkipCount;
        this.rollbackCount = rollbackCount;
        this.exitCode = exitCode;
        this.exitMessage = exitMessage;
        this.lastUpdated = lastUpdated;
    }
}
