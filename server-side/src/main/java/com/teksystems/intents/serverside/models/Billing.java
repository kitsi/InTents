package com.teksystems.intents.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "billing")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Billing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Column(name = "billing_id")
    private Long billingId;

    @OneToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    @Setter
    @JsonIgnore
    private Order order;

    @Column(name = "tax_rate", columnDefinition = "DECIMAL(10,4) UNSIGNED DEFAULT 0.08")
    @Getter
    private BigDecimal tax_rate;

    @Column(name = "subtotal", columnDefinition = "DECIMAL(10,4) UNSIGNED DEFAULT 0")
    private BigDecimal subtotal;

    @Column(name = "tax", columnDefinition = "DECIMAL(10,4) UNSIGNED DEFAULT 0")
    private BigDecimal tax;

    @Column(name = "total", columnDefinition = "DECIMAL(10,4) UNSIGNED DEFAULT 0")
    private BigDecimal total;

    @Column(name = "is_paid", columnDefinition = "BOOLEAN DEFAULT false")
    @Getter
    private boolean isPaid;

    public BigDecimal getSubtotal() {
        calculateSubtotal();
        return subtotal;
    }

    public void calculateSubtotal() {
        String quantity;
        BigDecimal productPrice;
        for(OrderProduct product : order.getOrderProducts()) {
            quantity = String.valueOf(product.getQuantity());
            productPrice = product.getProduct().getPrice();
            subtotal = subtotal.add(productPrice.multiply(new BigDecimal(quantity)));
        }
    }

    public BigDecimal getTax() {
        calculateTax();
        return tax;
    }

    public void calculateTax() {
        tax = tax_rate.multiply(getSubtotal());
    }

    public BigDecimal getTotal() {
        calculateTotal();
        return total;
    }

    public void calculateTotal() {
        getSubtotal().add(getTax());
    }
}
