package com.teksystems.intents.serverside.controllers;

import com.teksystems.intents.serverside.models.Order;
import com.teksystems.intents.serverside.models.Product;
import com.teksystems.intents.serverside.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public Page<Order> getOrders(
            @RequestParam(value = "pageNum", defaultValue = "0", required = false) int pageNum,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
    ) {
        return orderService.getOrders(pageNum, pageSize);
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Order> getOrder(@PathVariable(value = "id") Long id) {
        return orderService.getOrder(id);
    }

    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteOrder(@PathVariable(value = "id") Long id) {
        orderService.deleteOrder(id);
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Order updateOrder(@PathVariable(value = "id") Long id, @RequestBody Order orderDetails) {
        return orderService.updateOrder(id, orderDetails);
    }

}
