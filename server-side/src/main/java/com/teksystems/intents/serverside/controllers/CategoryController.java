package com.teksystems.intents.serverside.controllers;

import com.teksystems.intents.serverside.models.Category;
import com.teksystems.intents.serverside.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http:localhost:3000")
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public Page<Category> getCategories(
            @RequestParam(value = "pageNum", defaultValue = "0", required = false) int pageNum,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
    ) {
        return categoryService.getCategories(pageNum, pageSize);
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Category> getCategory(@PathVariable(value = "id") Long id) {
        return categoryService.getCategory(id);
    }

}
