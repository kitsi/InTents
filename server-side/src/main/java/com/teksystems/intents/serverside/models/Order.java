package com.teksystems.intents.serverside.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    @Getter
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @Getter @Setter
    private User user;

    @OneToMany(mappedBy = "order")
    @Getter @Setter
    private List<OrderProduct> orderProducts;

    @OneToOne(mappedBy = "order")
    @JoinColumn(name = "billing_id")
    private Billing billing;
}
