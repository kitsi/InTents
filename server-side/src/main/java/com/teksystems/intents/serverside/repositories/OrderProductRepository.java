package com.teksystems.intents.serverside.repositories;

import com.teksystems.intents.serverside.models.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProduct, Long> {
}
