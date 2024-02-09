package com.example.appdev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.appdev.modal.PaymentDetails;
import com.example.appdev.service.PaymentDetailsService;

@RestController
@RequestMapping("/api/v1/paymentdetails")
public class PaymentDetailsController {

    @Autowired
    private PaymentDetailsService paymentDetailsService;

    @GetMapping
    public List<PaymentDetails> getAllPaymentDetails() {
        return paymentDetailsService.getAllPaymentDetails();
    }

    @GetMapping("/{pId}")
    public ResponseEntity<PaymentDetails> getPaymentDetailsById(@PathVariable long pId) {
        return paymentDetailsService.getPaymentDetailsById(pId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<String> createPaymentDetails(@RequestBody PaymentDetails paymentDetails) {
        String message = paymentDetailsService.createPaymentDetails(paymentDetails);
        return ResponseEntity.ok(message);
    }

    @PutMapping("/{pId}")
    public ResponseEntity<String> updatePaymentDetails(@PathVariable long pId, @RequestBody PaymentDetails updatedPaymentDetails) {
        String message = paymentDetailsService.updatePaymentDetails(pId, updatedPaymentDetails);
        return ResponseEntity.ok(message);
    }

    @DeleteMapping("/{pId}")
    public ResponseEntity<String> deletePaymentDetails(@PathVariable long pId) {
        String message = paymentDetailsService.deletePaymentDetails(pId);
        return ResponseEntity.ok(message);
    }
}
