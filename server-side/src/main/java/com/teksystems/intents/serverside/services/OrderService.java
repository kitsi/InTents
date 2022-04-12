package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Order;
import com.teksystems.intents.serverside.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    public Page<Order> getOrders(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<Order> orders = orderRepo.findAll(pageable);
        return orders;
    }

    public Optional<Order> getOrder(Long id) {
        return orderRepo.findById(id);
    }

    public void deleteOrder(Long id) {
        orderRepo.deleteById(id);
    }

    public Order createOrder(Order order) {
        orderRepo.save(order);
    }
}
