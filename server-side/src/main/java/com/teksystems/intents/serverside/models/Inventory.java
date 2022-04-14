package com.teksystems.intents.serverside.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "inventory")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventory_id")
    @Getter
    private Long inventoryId;

    @OneToOne(mappedBy = "inventory")
    private Product product;

    @Column(name = "quantity")
    @Getter @Setter
    private Integer quantity;

//    public void addToQuantity(int num) {
//        quantity += num;
//    }
//
//    public void removeFromQuantity(int num) {
//        quantity = (num <= quantity) ? (quantity - num) : quantity;
//    }
}
