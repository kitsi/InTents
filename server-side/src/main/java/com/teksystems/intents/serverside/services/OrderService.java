package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Order;
import com.teksystems.intents.serverside.models.OrderProduct;
import com.teksystems.intents.serverside.repositories.OrderProductRepository;
import com.teksystems.intents.serverside.repositories.OrderRepository;
import com.teksystems.intents.serverside.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private OrderProductRepository orderProductRepo;

    @Autowired
    private UserRepository userRepo;

    public Page<Order> getOrders(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        return orderRepo.findAll(pageable);
    }

    public Optional<Order> getOrder(Long id) {
        return orderRepo.findById(id);
    }

    public void deleteOrder(Long id) {
        orderRepo.deleteById(id);
    }

    public Order createOrder(Order order) {
        Order orderToSave = new Order();
        orderToSave.setUser(order.getUser());
        orderRepo.save(orderToSave);
        List<OrderProduct> orderProducts = order.getOrderProducts();
        for(OrderProduct orderProduct : orderProducts) {
            OrderProduct orderProductToAdd = new OrderProduct();
            orderProductToAdd.setProduct(orderProduct.getProduct());
            orderProductToAdd.setQuantity(orderProduct.getQuantity());
            orderProductToAdd.setOrder(orderToSave);
            orderProductRepo.save(orderProductToAdd);
        }
        return orderRepo.save(orderToSave);
    }

    public Order updateOrder(Long id, Order orderDetails) {
        Order order = orderRepo.findById(id).get();
        order.setOrderProducts(orderDetails.getOrderProducts());
        order.setUser(orderDetails.getUser());
        order = orderRepo.findById(id).get();
        return orderRepo.save(order);
    }
}
