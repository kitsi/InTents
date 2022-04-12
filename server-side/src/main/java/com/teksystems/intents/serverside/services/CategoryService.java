package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Category;
import com.teksystems.intents.serverside.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepo;

    public Page<Category> getCategories(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<Category> categories = categoryRepo.findAll(pageable);
        return categories;
    }

    public Optional<Category> getCategory(Long id) {
        return categoryRepo.findById(id);
    }

    public void deleteCategory(Long id) {
        categoryRepo.deleteById(id);
    }

    public Category createCategory(Category category) {
        return categoryRepo.save(category);
    }

    public Category updateCategory(Long id, Category categoryDetails) {
        Category category = categoryRepo.findById(id).get();
        category.setTitle(categoryDetails.getTitle());
        return categoryRepo.save(category);
    }
}
