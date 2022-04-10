package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Inventory;
import com.teksystems.intents.serverside.models.Product;
import com.teksystems.intents.serverside.repositories.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private ProductRepository productRepo;

    public Page<Product> getProducts(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<Product> products = productRepo.findAll(pageable);
        return products;
}
