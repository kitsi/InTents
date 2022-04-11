package com.teksystems.intents.serverside.dto;

import com.google.gson.annotations.SerializedName;

public class CreatePayment {
    @SerializedName("items")
    Object[] items;

    public Object[] getItems() {
        return items;
    }

    public Long getAmount() {
        // Hard-corded amount of $10. Perform calculation here for order amount((item price * qty) * tax)
        return 14L;
    }
}
