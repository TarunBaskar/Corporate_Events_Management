package com.example.appdev.modal;

import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AdminEvent {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;
    private String eventName;
    private String eventDescription;
    private String eventImageUrl;
    private Long eventCharges;
    public Long getEventId() {
        return eventId;
    }
    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }
    
    public String getEventName() {
        return eventName;
    }
    public void setEventName(String eventName) {
        this.eventName = eventName;
    }
    public String getEventDescription() {
        return eventDescription;
    }
    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }
    public String getEventImageUrl() {
        return eventImageUrl;
    }
    public void setEventImageUrl(String eventImageUrl) {
        this.eventImageUrl = eventImageUrl;
    }
    public Long getEventCharges() {
        return eventCharges;
    }
    public void setEventCharges(Long eventCharges) {
        this.eventCharges = eventCharges;
    }
    @Override
    public String toString() {
        return "AdminEvent [eventId=" + eventId + ", eventName=" + eventName + ", eventDescription=" + eventDescription
                + ", eventImageUrl=" + eventImageUrl + ", eventCharges=" + eventCharges + "]";
    }
    public AdminEvent(Long eventId, String eventName, String eventDescription, String eventImageUrl,
            Long eventCharges) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.eventDescription = eventDescription;
        this.eventImageUrl = eventImageUrl;
        this.eventCharges = eventCharges;
    }
    public AdminEvent() {
        
    }
    
}
