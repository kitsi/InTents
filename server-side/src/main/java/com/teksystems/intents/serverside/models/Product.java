package com.teksystems.intents.serverside.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter
    private Long productId;

    @Column(name = "sku")
    @Getter @Setter
    private String sku;

    @Column(name = "title")
    @Getter @Setter
    private String title;

    @Column(name = "description", columnDefinition = "VARCHAR(1000)")
    @Getter @Setter
    private String description;

    @Column(name = "price", columnDefinition = "DECIMAL(10,2) UNSIGNED")
    @Getter @Setter
    private BigDecimal price;

    @Column(name = "image")
    @Getter @Setter
    private String image;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @Getter @Setter
    private Category category;

    @OneToOne(cascade = CascadeType.ALL)
    @Getter @Setter
    @JoinColumn(name = "inventory_id", referencedColumnName = "inventory_id")
    private Inventory inventory;
}
