package com.teksystems.intents.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long orderProductId;

    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    @Setter
    @JsonIgnore
    private Order order;

    @OneToOne
    @JoinColumn(name = "product_id")
    @Getter @Setter
    private  Product product;

    @Column(name = "qty")
    @Getter @Setter
    private int quantity;
}
