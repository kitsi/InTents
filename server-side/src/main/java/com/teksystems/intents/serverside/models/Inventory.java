package com.teksystems.intents.serverside.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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

    @OneToOne(mappedBy = "inventory")
    private Product product;

    @Column(name = "quantity")
    @Getter @Setter
    private Integer quantity;

    @Override
    public String toString() {
        return "Inventory{" +
                "inventoryId=" + inventoryId +
                ", product=" + product +
                ", quantity=" + quantity +
                '}';
    }
}
