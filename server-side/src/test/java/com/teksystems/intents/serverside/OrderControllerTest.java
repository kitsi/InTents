package com.teksystems.intents.serverside;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("unittest")
public class OrderControllerTest {

    private static final String ordersUrl = "/orders/?pageNum=0&pageSize=10";
    private static final String oneOrderUrl = "/orders/{id}";

    @Autowired
    WebApplicationContext context;

    MockMvc mvc;

    @Before
    public void setupTests() {
        this.mvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void GetRequestToOrdersEndPointShouldReturnCorrectResponse() throws Exception {
        mvc.perform(get(ordersUrl))
                .andExpect(jsonPath("$.content",hasSize(3)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$['pageable']['paged']").value("true"));
    }

    @Test
    public void deleteOrderEndpointGivenOrderId() throws Exception {
        mvc.perform(delete(oneOrderUrl, 1))
                .andExpect(status().isOk());
    }

    @Test
    public void GetRequestToIndividualOrderEndPointShouldReturnCorrectResponseGivenId4() throws Exception {
        mvc.perform(get(oneOrderUrl,4))
                .andExpect(content().contentType("application/json"))
                .andExpect(status().isOk());
    }
}
