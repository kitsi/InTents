package com.teksystems.intents.serverside.repositories;

import com.teksystems.intents.serverside.models.Order;
import com.teksystems.intents.serverside.models.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProduct, Long> {
    List<OrderProduct> findAllByOrder(Order order);
}
