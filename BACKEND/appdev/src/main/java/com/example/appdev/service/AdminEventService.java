package com.example.appdev.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.appdev.modal.AdminEvent;
import com.example.appdev.repository.AdminEventRepo;

@Service
public class AdminEventService {

    @Autowired
    private AdminEventRepo adminEventRepository;

    public List<AdminEvent> getAllEvents() {
        return adminEventRepository.findAll();
    }

    public Optional<AdminEvent> getEventById(Long eventId) {
        return adminEventRepository.findById(eventId);
    }

    public String createEvent(AdminEvent event) {
        AdminEvent createdEvent = adminEventRepository.save(event);
        return "Event successfully added";
    }

    public String updateEvent(Long eventId, AdminEvent updatedEvent) {
        if (adminEventRepository.existsById(eventId)) {
            updatedEvent.setEventId(eventId);
            adminEventRepository.save(updatedEvent);
            return "Event successfully updated";
        } else {
            return "Event not found";
        }
    }

    public String deleteEvent(Long eventId) {
        if (adminEventRepository.existsById(eventId)) {
            adminEventRepository.deleteById(eventId);
            return "Event successfully deleted";
        } else {
            return "Event not found";
        }
    }
}
// package com.example.appdev.service;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.appdev.modal.AdminEvent;
// import com.example.appdev.repository.AdminEventRepo;

// @Service
// public class AdminEventService {

//     @Autowired
//     private AdminEventRepo adminEventRepository;

//     public List<AdminEvent> getAllEvents() {
//         return adminEventRepository.findAll();
//     }

//     public Optional<AdminEvent> getEventById(Long eventId) {
//         return adminEventRepository.findById(eventId);
//     }

//     public AdminEvent createEvent(AdminEvent event) {
//         return adminEventRepository.save(event);
//     }

//     public AdminEvent updateEvent(Long eventId, AdminEvent updatedEvent) {
//         Optional<AdminEvent> existingEvent = adminEventRepository.findById(eventId);
        
//         if (existingEvent.isPresent()) {
//             AdminEvent eventToUpdate = existingEvent.get();
//             eventToUpdate.setEventName(updatedEvent.getEventName());
//             eventToUpdate.setEventDescription(updatedEvent.getEventDescription());
//             eventToUpdate.setEventImageUrl(updatedEvent.getEventImageUrl());
//             eventToUpdate.setEventCharges(updatedEvent.getEventCharges());
            
//             eventToUpdate.setEventId(eventId);
            
//             return adminEventRepository.save(eventToUpdate);
//         } else {
//             return null;
//         }
//     }

//     public void deleteEvent(Long eventId) {
//         adminEventRepository.deleteById(eventId);
//     }
// }

