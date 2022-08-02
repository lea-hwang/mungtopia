package com.d209.mungtopia.entity;

import lombok.Getter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "adoption_step_date", schema = "mungtopia", catalog = "")
@Getter
public class AdoptionStepDate {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "adoption_step_date_id")
    private long adoptionStepDateId;
    @Basic
    @Column(name = "step")
    private Integer step;
    @Basic
    @Column(name = "date")
    private Timestamp date;

    @ManyToOne
    @JoinColumn(name = "adoption_process_id", referencedColumnName = "adoption_process_id", nullable = false)
    private AdoptionProcess adoptionProcessByAdoptionProcessId;

    public AdoptionProcess getAdoptionProcessByAdoptionProcessId() {
        return adoptionProcessByAdoptionProcessId;
    }

    public void setAdoptionProcessByAdoptionProcessId(AdoptionProcess adoptionProcessByAdoptionProcessId) {
        this.adoptionProcessByAdoptionProcessId = adoptionProcessByAdoptionProcessId;
    }
}
