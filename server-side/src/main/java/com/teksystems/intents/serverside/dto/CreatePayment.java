package com.teksystems.intents.serverside.dto;

public class CreatePayment {
    private Long amount;

    public Long getAmount() {
        // Perform calculation here for order amount((item price * qty) * tax) using information from database
        // For security and fraud reasons amount to be sent to stripe will be calculated here not Frontend
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }
}
