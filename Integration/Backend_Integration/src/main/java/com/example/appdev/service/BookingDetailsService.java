// package com.example.appdev.service;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.appdev.modal.BookingDetails;
// import com.example.appdev.repository.BookingDetailsRepository;

// @Service
// public class BookingDetailsService {

//     @Autowired
//     private BookingDetailsRepository bookingDetailsRepository;

//     public List<BookingDetails> getAllBookingDetails() {
//         return bookingDetailsRepository.findAll();
//     }

//     public Optional<BookingDetails> getBookingDetailsById(Long bookId) {
//         return bookingDetailsRepository.findById(bookId);
//     }

//     public BookingDetails createBookingDetails(BookingDetails bookingDetails) {
//         return bookingDetailsRepository.save(bookingDetails);
//     }

//     public BookingDetails updateBookingDetails(Long bookId, BookingDetails updatedBookingDetails) {
//         if (bookingDetailsRepository.existsById(bookId)) {
//             updatedBookingDetails.setBookId(bookId);
//             return bookingDetailsRepository.save(updatedBookingDetails);
//         } else {
//             return null;
//         }
//     }

//     public void deleteBookingDetails(Long bookId) {
//         bookingDetailsRepository.deleteById(bookId);
//     }
// }

// package com.example.appdev.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// import com.example.appdev.modal.BookingDetails;
// import com.example.appdev.repository.BookingDetailsRepository;

// @Service
// public class BookingDetailsService {

//     @Autowired
//     private BookingDetailsRepository bookingDetailsRepository;

//     public List<BookingDetails> getAllBookingDetails() {
//         return bookingDetailsRepository.findAll();
//     }

//     public Optional<BookingDetails> getBookingDetailsById(Long bookId) {
//         return bookingDetailsRepository.findById(bookId);
//     }

//     public String createBookingDetails(BookingDetails bookingDetails) {
//         BookingDetails createBook = bookingDetailsRepository.save(bookingDetails);
//         return "BookingDetails added successfully";
//     }
//     // public String createBookingDetails(BookingDetails bookingDetails) {
//     //     bookingDetailsRepository.save(bookingDetails);
//     //     return "BookingDetails added successfully";
//     // }

//     public String updateBookingDetails(Long bookId, BookingDetails updatedBookingDetails) {
//         if (bookingDetailsRepository.existsById(bookId)) {
//             updatedBookingDetails.setBookId(bookId);
//             bookingDetailsRepository.save(updatedBookingDetails);
//             return "BookingDetails updated successfully";
//         } else {
//             return "BookingDetails not found";
//         }
//     }

//     public String deleteBookingDetails(Long bookId) {
//         if (bookingDetailsRepository.existsById(bookId)) {
//             bookingDetailsRepository.deleteById(bookId);
//             return "BookingDetails deleted successfully";
//         } else {
//             return "BookingDetails not found";
//         }
//     }
// }

package com.example.appdev.service;

import com.example.appdev.modal.BookingDetails;
import com.example.appdev.repository.BookingDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingDetailsService {

    private final BookingDetailsRepository bookingDetailsRepository;

    @Autowired
    public BookingDetailsService(BookingDetailsRepository bookingDetailsRepository) {
        this.bookingDetailsRepository = bookingDetailsRepository;
    }

    public List<BookingDetails> getAllBookings() {
        return bookingDetailsRepository.findAll();
    }

    public BookingDetails getBookingById(Long id) {
        return bookingDetailsRepository.findById(id).orElse(null);
    }

    public List<BookingDetails> getBookingsByEmail(String email) {
        return bookingDetailsRepository.findByBEmail(email);
    }

    public BookingDetails saveBooking(BookingDetails bookingDetails) {
        return bookingDetailsRepository.save(bookingDetails);
    }

    public void deleteBooking(Long id) {
        bookingDetailsRepository.deleteById(id);
    }
}
