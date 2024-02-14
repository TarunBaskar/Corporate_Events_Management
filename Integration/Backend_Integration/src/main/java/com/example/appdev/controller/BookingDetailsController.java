// // package com.example.appdev.controller;

// // import java.util.List;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.*;

// // import com.example.appdev.modal.BookingDetails;
// // import com.example.appdev.service.BookingDetailsService;

// // @RestController
// // @RequestMapping("/api/v1/bookingdetails")
// // public class BookingDetailsController {

// //     @Autowired
// //     private BookingDetailsService bookingDetailsService;

// //     @GetMapping
// //     public List<BookingDetails> getAllBookingDetails() {
// //         return bookingDetailsService.getAllBookingDetails();
// //     }

// //     @GetMapping("/{bookId}")
// //     public ResponseEntity<BookingDetails> getBookingDetailsById(@PathVariable Long bookId) {
// //         return bookingDetailsService.getBookingDetailsById(bookId)
// //                 .map(ResponseEntity::ok)
// //                 .orElse(ResponseEntity.notFound().build());
// //     }

// //     @PostMapping
// //     public ResponseEntity<BookingDetails> createBookingDetails(@RequestBody BookingDetails bookingDetails) {
// //         BookingDetails createdBookingDetails = bookingDetailsService.createBookingDetails(bookingDetails);
// //         return ResponseEntity.ok(createdBookingDetails);
// //     }

// //     @PutMapping("/{bookId}")
// //     public ResponseEntity<BookingDetails> updateBookingDetails(@PathVariable Long bookId,
// //                                                               @RequestBody BookingDetails updatedBookingDetails) {
// //         BookingDetails result = bookingDetailsService.updateBookingDetails(bookId, updatedBookingDetails);
// //         if (result != null) {
// //             return ResponseEntity.ok(result);
// //         } else {
// //             return ResponseEntity.notFound().build();
// //         }
// //     }

// //     @DeleteMapping("/{bookId}")
// //     public ResponseEntity<Void> deleteBookingDetails(@PathVariable Long bookId) {
// //         bookingDetailsService.deleteBookingDetails(bookId);
// //         return ResponseEntity.noContent().build();
// //     }
// // }

//     package com.example.appdev.controller;

//     import org.springframework.beans.factory.annotation.Autowired;
//     import org.springframework.http.ResponseEntity;
//     import org.springframework.web.bind.annotation.*;

//     import java.util.List;

//     import com.example.appdev.modal.BookingDetails;
//     import com.example.appdev.service.BookingDetailsService;

//     @RestController
//     @RequestMapping("/bookingdetails")
//     public class BookingDetailsController {

//         @Autowired
//         private BookingDetailsService bookingDetailsService;

//         @GetMapping
//         public List<BookingDetails> getAllBookingDetails() {
//             return bookingDetailsService.getAllBookingDetails();
//         }

//         @GetMapping("/{bookId}")
//         public ResponseEntity<BookingDetails> getBookingDetailsById(@PathVariable Long bookId) {
//             return bookingDetailsService.getBookingDetailsById(bookId)
//                     .map(ResponseEntity::ok)
//                     .orElse(ResponseEntity.notFound().build());
//         }
        

//         @PostMapping
//         public ResponseEntity<String> createBookingDetails(@RequestBody BookingDetails bookingDetails) {
//             String message = bookingDetailsService.createBookingDetails(bookingDetails);
//             return ResponseEntity.ok(message);
//         }

//         @PutMapping("/{bookId}")
//         public ResponseEntity<String> updateBookingDetails(@PathVariable Long bookId, @RequestBody BookingDetails updatedBookingDetails) {
//             String message = bookingDetailsService.updateBookingDetails(bookId, updatedBookingDetails);
//             return ResponseEntity.ok(message);
//         }

//         @DeleteMapping("/{bookId}")
//         public ResponseEntity<String> deleteBookingDetails(@PathVariable Long bookId) {
//             String message = bookingDetailsService.deleteBookingDetails(bookId);
//             return ResponseEntity.ok(message);
//         }
//     }



package com.example.appdev.controller;

import com.example.appdev.modal.BookingDetails;
import com.example.appdev.service.BookingDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingDetailsController {

    private final BookingDetailsService bookingDetailsService;

    @Autowired
    public BookingDetailsController(BookingDetailsService bookingDetailsService) {
        this.bookingDetailsService = bookingDetailsService;
    }

    @GetMapping
    public List<BookingDetails> getAllBookings() {
        return bookingDetailsService.getAllBookings();
    }

    @GetMapping("/{id}")
    public BookingDetails getBookingById(@PathVariable Long id) {
        return bookingDetailsService.getBookingById(id);
    }

    @GetMapping("/byEmail/{email}")
    public List<BookingDetails> getBookingsByEmail(@PathVariable String email) {
        return bookingDetailsService.getBookingsByEmail(email);
    }

    @PostMapping
    public BookingDetails saveBooking(@RequestBody BookingDetails bookingDetails) {
        return bookingDetailsService.saveBooking(bookingDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingDetailsService.deleteBooking(id);
    }
}
