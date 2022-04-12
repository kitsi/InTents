package com.teksystems.intents.serverside.services;

import com.teksystems.intents.serverside.models.Inventory;
import com.teksystems.intents.serverside.models.Product;
import com.teksystems.intents.serverside.repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepo;

    public Page<Inventory> getAllInventory(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum, pageSize);
        Page<Inventory> inventory = inventoryRepo.findAll(pageable);
        return inventory;
    }

    public Optional<Inventory> getInventory(Long id) {
        return inventoryRepo.findById(id);
    }

    public void deleteInventory(Long id) {
        inventoryRepo.deleteById(id);
    }

    public Inventory createInventory(Inventory inventory) {
        return inventoryRepo.save(inventory);
    }

    public Inventory updateInventory(Long id, Inventory inventoryDetails) {
        Inventory inventory = inventoryRepo.findById(id).get();
        inventory.setQuantity(inventoryDetails.getQuantity());
        return inventoryRepo.save(inventory);
    }
}
