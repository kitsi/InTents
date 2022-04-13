package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Category;
import com.teksystems.intents.serverside.models.Inventory;
import com.teksystems.intents.serverside.models.Product;
import com.teksystems.intents.serverside.repositories.InventoryRepository;
import com.teksystems.intents.serverside.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
        if(products.getContent().isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "No Products Found!"
            );
        }
        return products;
    }

    public Page<Product> getProductsByCategory(int pageNum, int pageSize, Long categoryId) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Optional<Category> category = categoryRepo.findById(categoryId);
        Page<Product> products = productRepo.findAllByCategory(pageable, category);
        return products;
    }


    public Optional<Product> getProduct(Long id) {
        Optional<Product> product = productRepo.findById(id);
        if(product.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Product Not Found With ID: "+id
            );
        }
        return product;
    }

    public void deleteProduct(Long id) {
        try {
            productRepo.deleteById(id);
        } catch (Exception e){
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Product with ID "+id+" doesn't exist!"
        );
        }
    }

    public Product createProduct(Product product) {
       try {
           Inventory inventory = product.getInventory();
           inventoryRepo.save(inventory);
           return productRepo.save(product);
       } catch (Exception e){
           throw new ResponseStatusException(
                   HttpStatus.NOT_FOUND, "The category ID given doesn't exist!"
           );
       }
    }

    public Product updateProduct(Long id, Product productDetails) {
        try {
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
        }  catch (Exception e){
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Product with ID "+id+" doesn't exist!"
            );
        }
    }

}
