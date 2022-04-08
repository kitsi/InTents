package com.teksystems.intents.serverside;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IntentsApp {

    public static void main(String[] args) {
        SpringApplication.run(IntentsApp.class, args);
        System.out.println("server side wired up!");
    }

}
