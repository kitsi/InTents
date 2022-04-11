package com.teksystems.intents.serverside.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "order_products")
@NoArgsConstructor
@AllArgsConstructor
public class OrderProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_product_id")
    @Getter
    private Long orderItemId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    @Getter @Setter
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @Getter @Setter
    private  Product product;

    @Column(name = "qty")
    @Getter @Setter
    private int quantity;
}
