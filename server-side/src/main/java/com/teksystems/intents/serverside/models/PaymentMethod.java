package com.teksystems.intents.serverside.models;

public enum PaymentMethod {
    MASTERCARD("mastercard"),
    VISA("visa");

    public String name;

    PaymentMethod(String name) {
        this.name = name;
    }
}
