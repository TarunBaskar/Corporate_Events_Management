package com.example.appdev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.appdev.modal.AdminEvent;
import com.example.appdev.service.AdminEventService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/addevents")
public class AdminEventController {

    @Autowired
    private AdminEventService adminEventService;

    @GetMapping
    public List<AdminEvent> getAllEvents() {
        return adminEventService.getAllEvents();
    }

    @GetMapping("/{eventId}")
    public ResponseEntity<AdminEvent> getEventById(@PathVariable Long eventId) {
        return adminEventService.getEventById(eventId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    } 

    @PostMapping
    public ResponseEntity<String> createEvent(@RequestBody AdminEvent event) {
        String message = adminEventService.createEvent(event);
        return ResponseEntity.ok(message);
    }

    @PutMapping("/{eventId}")
    public ResponseEntity<String> updateEvent(@PathVariable Long eventId, @RequestBody AdminEvent updatedEvent) {
        String message = adminEventService.updateEvent(eventId, updatedEvent);
        if (message.equals("Event successfully updated")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long eventId) {
        String message = adminEventService.deleteEvent(eventId);
        if (message.equals("Event successfully deleted")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

// package com.example.appdev.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.example.appdev.modal.AdminEvent;
// import com.example.appdev.service.AdminEventService;

// @RestController
// @RequestMapping("/api/v1/addevents")
// public class AdminEventController {

//     @Autowired
//     private AdminEventService adminEventService;

//     @GetMapping
//     public List<AdminEvent> getAllEvents() {
//         return adminEventService.getAllEvents();
//     }

//     @GetMapping("/{eventId}")
//     public ResponseEntity<AdminEvent> getEventById(@PathVariable Long eventId) {
//         return adminEventService.getEventById(eventId)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     public ResponseEntity<AdminEvent> createEvent(@RequestBody AdminEvent event) {
//         AdminEvent createdEvent = adminEventService.createEvent(event);
//         return ResponseEntity.ok(createdEvent);
//     }

//     @PutMapping("/{eventId}")
//     public ResponseEntity<AdminEvent> updateEvent(@PathVariable Long eventId, @RequestBody AdminEvent updatedEvent) {
//         AdminEvent result = adminEventService.updateEvent(eventId, updatedEvent);
//         if (result != null) {
//             return ResponseEntity.ok(result);
//         } else {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/{eventId}")
//     public ResponseEntity<Void> deleteEvent(@PathVariable Long eventId) {
//         adminEventService.deleteEvent(eventId);
//         return ResponseEntity.noContent().build();
//     }
// }
