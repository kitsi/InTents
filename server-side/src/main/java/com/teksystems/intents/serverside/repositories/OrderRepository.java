package com.teksystems.intents.serverside.repositories;

import com.teksystems.intents.serverside.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
