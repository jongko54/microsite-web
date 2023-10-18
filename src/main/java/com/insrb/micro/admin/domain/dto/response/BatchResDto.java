package com.insrb.micro.admin.domain.dto.response;

import com.insrb.micro.admin.domain.entity.Batch;
import lombok.Getter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
public class BatchResDto {

    private Long stepExecutionId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String status;
    private Long readCount;
    private Long writeCount;
    private LocalDateTime lastUpdated;

    public BatchResDto(Batch entity){
        this.stepExecutionId = entity.getStepExecutionId();
        this.startTime = entity.getStartTime();
        this.endTime = entity.getEndTime();
        this.status = entity.getStatus();
        this.readCount = entity.getReadCount();
        this.writeCount = entity.getWriteCount();
        this.lastUpdated = entity.getLastUpdated();
    }
}
