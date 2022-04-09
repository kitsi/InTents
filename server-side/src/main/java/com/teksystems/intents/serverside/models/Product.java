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
    @Column(name = "product_id")
    @Getter
    private Long productId;

    @Column(name = "sku")
    @Getter @Setter
    private String sku;

    @Column(name = "product_title")
    @Getter @Setter
    private String productTitle;

    @Column(name = "description")
    @Getter @Setter
    private String description;

    @Column(name = "price", columnDefinition = "DECIMAL UNSIGNED")
    @Getter @Setter
    private BigDecimal price;

    @Column(name = "stockQty")
    @Getter @Setter
    private int quantityInStock;

    @Column(name = "image")
    @Getter @Setter
    private String image;

    @Column(name = "category")
    @Getter @Setter
    private String category;
}
