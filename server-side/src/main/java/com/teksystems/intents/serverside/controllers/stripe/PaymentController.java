package com.teksystems.intents.serverside.controllers.stripe;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.teksystems.intents.serverside.dto.CreatePayment;
import com.teksystems.intents.serverside.dto.CreatePaymentResponse;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http:localhost:3000")
@RestController
@RequestMapping("/api/create-payment-intent")
public class PaymentController {
    public CreatePaymentResponse createPaymentIntent(@RequestBody CreatePayment createPayment) throws StripeException {
        PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
                .setCurrency("usd")
                .setAmount(createPayment.getAmount() * 100L) // 100L converts to cents. This is Stripe requirement.
                .build();
        // Create a PaymentIntent with order amount and currency
        PaymentIntent intent = PaymentIntent.create(createParams);
        return new CreatePaymentResponse(intent.getClientSecret());
    }
}
