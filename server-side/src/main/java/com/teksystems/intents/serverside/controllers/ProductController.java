package com.teksystems.intents.serverside.controllers;

import com.teksystems.intents.serverside.models.Product;
import com.teksystems.intents.serverside.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http:localhost:3000")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Product> getProducts( @RequestParam(value = "category", required = false) Long categoryId) {
        if(categoryId == null) {
            return productService.getProducts();
        } else {
            return productService.getProductsByCategory(categoryId);
        }
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Product> getProduct(@PathVariable(value = "id") Long id) {
        return productService.getProduct(id);
    }


//===================================
//    ADMIN ONLY
//===================================

    @DeleteMapping("/admin/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteProduct(@PathVariable(value = "id") Long id) {
        productService.deleteProduct(id);
    }

    @PostMapping("/admin/")
    @CrossOrigin(origins = "http://localhost:3000")
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping("/admin/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Product updateProduct(@PathVariable(value = "id") Long id, @RequestBody Product productDetails) {
        return productService.updateProduct(id, productDetails);
    }
}
