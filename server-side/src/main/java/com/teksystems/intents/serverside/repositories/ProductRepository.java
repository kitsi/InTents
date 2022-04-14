package com.teksystems.intents.serverside.repositories;

import com.teksystems.intents.serverside.models.Category;
import com.teksystems.intents.serverside.models.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findAllByCategory(Pageable pageable, Optional<Category> category);

    Page<Product> findByTitleContaining(String title, Pageable pageable);
}