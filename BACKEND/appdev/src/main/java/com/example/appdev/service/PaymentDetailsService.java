package com.example.appdev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.example.appdev.modal.PaymentDetails;
import com.example.appdev.repository.PaymentDetailsRepository;

@Service
public class PaymentDetailsService {

    @Autowired
    private PaymentDetailsRepository paymentDetailsRepository;

    public List<PaymentDetails> getAllPaymentDetails() {
        return paymentDetailsRepository.findAll();
    }

    public Optional<PaymentDetails> getPaymentDetailsById(long pId) {
        return paymentDetailsRepository.findById(pId);
    }

    public String createPaymentDetails(PaymentDetails paymentDetails) {
        paymentDetailsRepository.save(paymentDetails);
        return "PaymentDetails added successfully";
    }

    public String updatePaymentDetails(long pId, PaymentDetails updatedPaymentDetails) {
        if (paymentDetailsRepository.existsById(pId)) {
            updatedPaymentDetails.setpId(pId);
            paymentDetailsRepository.save(updatedPaymentDetails);
            return "PaymentDetails updated successfully";
        } else {
            return "PaymentDetails not found";
        }
    }

    public String deletePaymentDetails(long pId) {
        if (paymentDetailsRepository.existsById(pId)) {
            paymentDetailsRepository.deleteById(pId);
            return "PaymentDetails deleted successfully";
        } else {
            return "PaymentDetails not found";
        }
    }
}
