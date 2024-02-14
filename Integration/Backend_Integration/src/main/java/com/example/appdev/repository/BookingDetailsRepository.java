package com.example.appdev.repository;

import com.example.appdev.modal.BookingDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookingDetailsRepository extends JpaRepository<BookingDetails, Long> {

    @Query("SELECT bd FROM BookingDetails bd WHERE bd.bEmail = :email")
    List<BookingDetails> findByBEmail(@Param("email") String email);
}
