package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.User;
import com.teksystems.intents.serverside.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepo;

    public Page<User> getUsers(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<User> users = userRepo.findAll(pageable);
        return users;
    }
}
