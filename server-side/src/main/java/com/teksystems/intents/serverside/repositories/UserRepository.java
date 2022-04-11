package com.teksystems.intents.serverside.repositories;

import com.teksystems.intents.serverside.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
