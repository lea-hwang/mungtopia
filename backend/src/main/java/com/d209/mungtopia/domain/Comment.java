package com.d209.mungtopia.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
public class Comment {
    @Id
    @GeneratedValue
    private Long commentId;
    private String email;
    private String author;
    private String contents;
    private boolean secret;
    private LocalDateTime createtime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comment_id")
    private Board board;
}
