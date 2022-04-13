package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Category;
import com.teksystems.intents.serverside.models.Inventory;
import com.teksystems.intents.serverside.models.Product;
import com.teksystems.intents.serverside.repositories.CategoryRepository;
import com.teksystems.intents.serverside.repositories.InventoryRepository;
import com.teksystems.intents.serverside.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private InventoryRepository inventoryRepo;

    @Autowired
    private CategoryRepository categoryRepo;

    public Page<Product> getProducts(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<Product> products = productRepo.findAll(pageable);
        return products;
    }

    public Page<Product> getProductsByCategory(int pageNum, int pageSize, Long categoryId) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Optional<Category> category = categoryRepo.findById(categoryId);
        Page<Product> products = productRepo.findAllByCategory(pageable, category);
        return products;
    }


    public Optional<Product> getProduct(Long id) {
        return productRepo.findById(id);
    }

    public void deleteProduct(Long id) {
        productRepo.deleteById(id);
    }

    public Product createProduct(Product product) {
        Inventory inventory = product.getInventory();
        inventoryRepo.save(inventory);
        return productRepo.save(product);
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepo.findById(id).get();
        Inventory inventory = productDetails.getInventory();
        inventoryRepo.save(inventory);
        product.setTitle(productDetails.getTitle());
        product.setDescription(productDetails.getDescription());
        product.setCategory(productDetails.getCategory());
        product.setPrice(productDetails.getPrice());
        product.setImage(productDetails.getImage());
        product.setInventory(productDetails.getInventory());
        product = productRepo.findById(id).get();
        return productRepo.save(product);
    }

}
