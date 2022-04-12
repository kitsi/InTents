package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Product;
import com.teksystems.intents.serverside.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    public Page<Product> getProducts(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<Product> products = productRepo.findAll(pageable);
        return products;
    }

    public Optional<Product> getProduct(Long id) {
        return productRepo.findById(id);
    }

    public void deleteProduct(Long id) {
        productRepo.deleteById(id);
    }

    public Product createProduct(Product product) {
        return productRepo.save(product);
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepo.findById(id).get();
        product.setTitle(productDetails.getTitle());
        product.setDescription(productDetails.getDescription());
        product.setCategory(productDetails.getCategory());
        product.setPrice(productDetails.getPrice());
        product.setImage(productDetails.getImage());
        product.setInventory(productDetails.getInventory());
        return productRepo.save(product);
    }

}
