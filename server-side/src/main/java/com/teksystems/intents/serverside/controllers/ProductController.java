package com.teksystems.intents.serverside.controllers;

import com.teksystems.intents.serverside.models.Product;
import com.teksystems.intents.serverside.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http:localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public Page<Product> getProducts(
            @RequestParam(value = "pageNum", defaultValue = "0", required = false) int pageNum,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
    ) {
        return productService.getProducts(pageNum, pageSize);
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
