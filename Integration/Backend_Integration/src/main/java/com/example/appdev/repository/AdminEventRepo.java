package com.example.appdev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.appdev.modal.AdminEvent;


public interface AdminEventRepo extends JpaRepository<AdminEvent,Long> {

}
