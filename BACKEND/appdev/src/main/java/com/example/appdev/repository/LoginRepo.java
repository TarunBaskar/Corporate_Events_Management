package com.example.appdev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.appdev.modal.Login;




@Repository

public interface LoginRepo extends JpaRepository<Login,Integer> {

}