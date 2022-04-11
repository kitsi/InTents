package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Order;
import com.teksystems.intents.serverside.repositories.OrderRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private OrderRepository orderRepo;

    public Page<Order> getOrders(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<Order> orders = orderRepo.findAll(pageable);
        return orders;
    }
}
