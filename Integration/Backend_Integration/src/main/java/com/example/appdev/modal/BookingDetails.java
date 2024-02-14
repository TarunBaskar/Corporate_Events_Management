package com.example.appdev.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BookingDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    private long bEventId;
    private String bEventName;
    private String bEmail;
    private String bUserName;
    private String bBookingdate;
    private String bEventDate;
    private String bDescription;
    private String bLocation;
    private int bHeadCount;
    private double bTotal;
   
    public Long getBookId() {
        return bookId;
    }
    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }
    public String getBEventName() {
        return bEventName;
    }
    public BookingDetails(long bEventId) {
        this.bEventId = bEventId;
    }
    public long getbEventId() {
        return bEventId;
    }
    public void setbEventId(long bEventId) {
        this.bEventId = bEventId;
    }
    public void setBEventName(String bEventName) {
        this.bEventName = bEventName;
    }
    public String getBEmail() {
        return bEmail;
    }
    public void setBEmail(String bEmail) {
        this.bEmail = bEmail;
    }
    public String getBUserName() {
        return bUserName;
    }
    public void setBUserName(String bUserName) {
        this.bUserName = bUserName;
    }
    public String getBBookingdate() {
        return bBookingdate;
    }
    public void setBBookingdate(String bBookingdate) {
        this.bBookingdate = bBookingdate;
    }
    public String getBEventDate() {
        return bEventDate;
    }
    public void setBEventDate(String bEventDate) {
        this.bEventDate = bEventDate;
    }
    public String getBDescription() {
        return bDescription;
    }
    public void setBDescription(String bDescription) {
        this.bDescription = bDescription;
    }
    public String getBLocation() {
        return bLocation;
    }
    public void setBLocation(String bLocation) {
        this.bLocation = bLocation;
    }
    public int getBHeadCount() {
        return bHeadCount;
    }
    public void setBHeadCount(int bHeadCount) {
        this.bHeadCount = bHeadCount;
    }
    public double getBTotal() {
        return bTotal;
    }
    public void setBTotal(double bTotal) {
        this.bTotal = bTotal;
    }
    
    public BookingDetails(){

    }
    public BookingDetails(Long bookId, String bEventName, String bEmail, String bUserName, String bBookingdate,
            String bEventDate, String bDescription, String bLocation, int bHeadCount, double bTotal) {
        this.bookId = bookId;
        this.bEventName = bEventName;
        this.bEmail = bEmail;
        this.bUserName = bUserName;
        this.bBookingdate = bBookingdate;
        this.bEventDate = bEventDate;
        this.bDescription = bDescription;
        this.bLocation = bLocation;
        this.bHeadCount = bHeadCount;
        this.bTotal = bTotal;
    }
    @Override
    public String toString() {
        return "BookingDetails [bookId=" + bookId + ", bEventId=" + bEventId + ", bEventName=" + bEventName
                + ", bEmail=" + bEmail + ", bUserName=" + bUserName + ", bBookingdate=" + bBookingdate + ", bEventDate="
                + bEventDate + ", bDescription=" + bDescription + ", bLocation=" + bLocation + ", bHeadCount="
                + bHeadCount + ", bTotal=" + bTotal + "]";
    }


}
