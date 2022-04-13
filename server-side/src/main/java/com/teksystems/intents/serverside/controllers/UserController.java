package com.teksystems.intents.serverside.controllers;

import com.teksystems.intents.serverside.models.Category;
import com.teksystems.intents.serverside.models.User;
import com.teksystems.intents.serverside.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public Page<User> getUsers(
            @RequestParam(value = "pageNum", defaultValue = "0", required = false) int pageNum,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
    ) {
        return userService.getUsers(pageNum, pageSize);
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<User> getUser(@PathVariable(value = "id") Long id) {
        return userService.getUser(id);
    }
}
