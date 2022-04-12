package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Inventory;
import com.teksystems.intents.serverside.repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepo;

    public Page<Inventory> getInventory(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<Inventory> inventory = inventoryRepo.findAll(pageable);
        return inventory;
    }
}
