package com.example.appdev.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.appdev.modal.Register;



public interface UserRepository extends JpaRepository<Register, Integer> {
    Optional<Register> findByEmail(String email);
}
