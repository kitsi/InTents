package com.teksystems.intents.serverside;

import com.teksystems.intents.serverside.controllers.CategoryController;
import com.teksystems.intents.serverside.controllers.OrderController;
import com.teksystems.intents.serverside.controllers.ProductController;
import com.teksystems.intents.serverside.controllers.UserController;
import com.teksystems.intents.serverside.controllers.stripe.PaymentController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ControllerCreationTest {
    @Autowired
    private ProductController productController;

    @Autowired
    private OrderController orderController;

    @Autowired
    private CategoryController categoryController;

    @Autowired
    private UserController userController;

    @Autowired
    private PaymentController paymentController;

    @Test
    public void productControllerLoads() throws Exception {
        assertThat(productController).isNotNull();
    }

    @Test
    public void orderControllerLoads() throws Exception {
        assertThat(orderController).isNotNull();
    }

    @Test
    public void categoryControllerLoads() throws Exception {
        assertThat(categoryController).isNotNull();
    }

    @Test
    public void userControllerLoads() throws Exception {
        assertThat(userController).isNotNull();
    }

    @Test
    public void paymentControllerLoads() throws Exception {
        assertThat(paymentController).isNotNull();
    }
}
