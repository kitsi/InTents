package com.teksystems.intents.serverside.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
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
        for(OrderProduct product : orderProducts) {
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
