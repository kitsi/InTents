package com.teksystems.intents.serverside;

import com.teksystems.intents.serverside.dto.CreatePaymentResponse;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CreatePaymentResponseTest {

    @Test
    public void constructorTest() {
        String clientSecret = "pi_3KobT1BxyXVeYpSr1IR9wvKu_secret_b8v6qC2HLcX09w1n0JwjWinyp";
        CreatePaymentResponse createPaymentResponse = new CreatePaymentResponse(clientSecret);
        assertEquals(clientSecret, createPaymentResponse.getClientSecret());
    }
}
