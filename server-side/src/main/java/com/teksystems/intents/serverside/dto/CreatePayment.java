package com.teksystems.intents.serverside.dto;

import java.math.BigDecimal;

public class CreatePayment {
    private BigDecimal amount;

    public BigDecimal getAmount() {
        // Perform calculation here for order amount((item price * qty) * tax) using information from database
        // For security and fraud reasons amount to be sent to stripe will be calculated here not Frontend
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
}
