package com.teksystems.intents.serverside.controllers.stripe;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.teksystems.intents.serverside.dto.CreatePayment;
import com.teksystems.intents.serverside.dto.CreatePaymentResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@CrossOrigin(origins = "http:localhost:3000")
@RestController
@RequestMapping("/api/create-payment-intent")
public class PaymentController {
    private final Logger LOGGER = LoggerFactory.getLogger(PaymentController.class);

    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public CreatePaymentResponse createPaymentIntent(@RequestBody CreatePayment createPayment) throws StripeException {
        BigDecimal bg = createPayment.getAmount();
        long amount = bg.longValue();
        try {
            PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
                    .setCurrency("usd")
                    .setAmount(amount * 100L) // 100L converts to cents. This is Stripe requirement.
                    .build();
            // Create a PaymentIntent with order amount and currencies
            LOGGER.info("Creating payment intent");
            PaymentIntent intent = PaymentIntent.create(createParams);
            return new CreatePaymentResponse(intent.getClientSecret());
        }  catch (StripeException e){
            LOGGER.error("Stripe paymentIntent creation failed");
            throw new StripeException(e.getMessage(), e.getRequestId(), e.getCode(), e.getStatusCode()) {};
        }
    }
}
