package com.d209.mungtopia.entity;

import lombok.Getter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "adoption_process", schema = "mungtopia", catalog = "")
@Getter
public class AdoptionProcess {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "adoption_process_id")
    private long adoptionProcessId;
    @Basic
    @Column(name = "step")
    private Integer step;
    @Basic
    @Column(name = "step_status")
    private Byte stepStatus;

    @ManyToOne
    @JoinColumn(name = "application_id", referencedColumnName = "application_id", nullable = false)
    private Application applicationByApplicationId;

    public Application getApplicationByApplicationId() {
        return applicationByApplicationId;
    }

    public void setApplicationByApplicationId(Application applicationByApplicationId) {
        this.applicationByApplicationId = applicationByApplicationId;
    }
}
