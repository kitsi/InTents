package com.teksystems.intents.serverside.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "billing")
@NoArgsConstructor
@AllArgsConstructor
public class Billing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "billing_id")
    @Getter
    private Long billingId;

    @OneToOne
    private Order order;

    @Column(name = "subtotal", columnDefinition = "DECIMAL UNSIGNED")
    private BigDecimal subtotal;

    @Column(name = "tax", columnDefinition = "DECIMAL UNSIGNED")
    private BigDecimal tax;

    @Column(name = "total", columnDefinition = "DECIMAL UNSIGNED")
    private BigDecimal total;

    @Column(name = "is_paid")
    @Getter
    private boolean isPaid;

    @Getter
    private String paymentMethod;

    public void setPaymentMethod(String paymentMethod) {
        for(PaymentMethod method : PaymentMethod.values()) {
            if(method.name.equals(paymentMethod)) {
                this.paymentMethod = paymentMethod;
                isPaid = true;
            } else {
                isPaid = false;
            }
        }
    }

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
    BigDecimal TAX_RATE = new BigDecimal("0.08");

    public BigDecimal getTax() {
        calculateTax();
        return tax;
    }

    public void calculateTax() {
        tax = TAX_RATE.multiply(getSubtotal());
    }

    public BigDecimal getTotal() {
        calculateTotal();
        return total;
    }

    public void calculateTotal() {
        getSubtotal().add(getTax());
    }
}
