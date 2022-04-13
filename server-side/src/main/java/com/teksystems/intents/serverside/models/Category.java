package com.teksystems.intents.serverside.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "categories")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long categoryId;

    @Column(name = "title")
    @Getter @Setter
    private String title;


}
