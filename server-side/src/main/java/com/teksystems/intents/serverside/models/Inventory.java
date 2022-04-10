package com.teksystems.intents.serverside.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "inventory")
@NoArgsConstructor
@AllArgsConstructor
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventory_id")
    @Getter
    private Long inventoryId;

    @OneToOne
    @JoinColumn(name = "product_id")
    @Getter @Setter
    private Product product;

    @Column(name = "quantity")
    @Getter @Setter
    private Integer quantity;
}
