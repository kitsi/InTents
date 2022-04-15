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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("unittest")
public class CategoryControllerTest {

    private static final String categoriesUrl = "/categories/?pageNum=0&pageSize=10";
    private static final String oneCategoryUrl = "/categories/{id}";

    @Autowired
    WebApplicationContext context;

    MockMvc mvc;

    @Before
    public void setupTests() {
        this.mvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void GetRequestToCategoriesEndPointShouldReturnCorrectResponse() throws Exception {
        mvc.perform(get(categoriesUrl))
                .andExpect(jsonPath("$.content",hasSize(5)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$['pageable']['paged']").value("true"));
    }

    @Test
    public void GetRequestToIndividualCategoryEndPointShouldReturnCorrectResponseGivenId3() throws Exception {
        mvc.perform(get(oneCategoryUrl,3))
                .andExpect(content().contentType("application/json"))
                .andExpect(status().isOk());
    }
}

