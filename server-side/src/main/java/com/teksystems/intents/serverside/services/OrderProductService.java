package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.OrderProduct;
import com.teksystems.intents.serverside.repositories.OrderProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderProductService {

    @Autowired
    private OrderProductRepository orderProductRepo;

    public void addOrderProducts(OrderProduct orderProduct) {
        orderProductRepo.save(orderProduct);
    }
}
