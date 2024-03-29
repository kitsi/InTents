package com.teksystems.intents.serverside.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    @Getter
    private Long userId;

    @Column(name = "first_name")
    @Getter @Setter
    private String firstName;

    @Column(name = "last_name")
    @Getter @Setter
    private String lastName;

    @Column(name = "username")
    @Getter @Setter
    private String username;

    // Needs encryption
    @Column(name = "password")
    @Getter @Setter
    private String password;

    @Column(name = "is_admin", columnDefinition = "BOOLEAN DEFAULT false")
    @Getter @Setter
    private boolean isAdmin;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;
}
