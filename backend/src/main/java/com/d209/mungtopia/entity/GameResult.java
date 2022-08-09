package com.d209.mungtopia.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@Table(name = "game_result", schema = "mungtopia")
@NoArgsConstructor
@AllArgsConstructor
public class GameResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "score_id")
    private long scoreId;

    @Column(name = "game_tag")
    private Integer gameTag;

    @Column(name = "result")
    private Boolean result;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq", referencedColumnName = "user_seq", nullable = false)
    private User user;

    public GameResult(int gameTag,  User user) {
        this.gameTag = gameTag;
        this.result = true;
        this.user = user;
    }
}
