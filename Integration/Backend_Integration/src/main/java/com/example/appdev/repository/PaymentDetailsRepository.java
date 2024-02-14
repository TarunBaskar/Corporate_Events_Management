package com.example.appdev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.appdev.modal.PaymentDetails;

// public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails, Long> {
        
// }

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails, Long> {
    // List<PaymentDetails> findByPEmail(String email);
    @Query("SELECT pd FROM PaymentDetails pd WHERE pd.pEmail = :email")
    List<PaymentDetails> findByPEmail(@Param("email") String email);
}