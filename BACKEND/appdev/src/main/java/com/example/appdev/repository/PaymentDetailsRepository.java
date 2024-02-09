package com.example.appdev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.appdev.modal.PaymentDetails;

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails, Long> {
        
}
