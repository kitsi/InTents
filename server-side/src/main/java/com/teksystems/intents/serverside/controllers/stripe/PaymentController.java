package com.teksystems.intents.serverside.controllers.stripe;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.teksystems.intents.serverside.dto.CreatePayment;
import com.teksystems.intents.serverside.dto.CreatePaymentResponse;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@CrossOrigin(origins = "http:localhost:3000")
@RestController
@RequestMapping("/create-payment-intent")
public class PaymentController {
    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public CreatePaymentResponse createPaymentIntent(@RequestBody CreatePayment createPayment) throws StripeException {
        BigDecimal bg = createPayment.getAmount();
        long amount = bg.longValue();
        PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
                .setCurrency("usd")
                .setAmount(amount * 100L) // 100L converts to cents. This is Stripe requirement.
                .build();
        // Create a PaymentIntent with order amount and currency
        PaymentIntent intent = PaymentIntent.create(createParams);
        return new CreatePaymentResponse(intent.getClientSecret());
    }
}
