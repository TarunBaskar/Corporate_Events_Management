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
    private String bEventName;
    private String bEmail;
    private String bUserName;
    private String bBookingdate;
    private String bEventDate;
    private String bDescription;
    private String bLocation;
    private int bHeadCount;
    private double bTotal;
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
        return "BookingDetails [bookId=" + bookId + ", bEventName=" + bEventName + ", bEmail=" + bEmail + ", bUserName="
                + bUserName + ", bBookingdate=" + bBookingdate + ", bEventDate=" + bEventDate + ", bDescription="
                + bDescription + ", bLocation=" + bLocation + ", bHeadCount=" + bHeadCount + ", bTotal=" + bTotal + "]";
    }
    public Long getBookId() {
        return bookId;
    }
    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }
    public String getbEventName() {
        return bEventName;
    }
    public void setbEventName(String bEventName) {
        this.bEventName = bEventName;
    }
    public String getbEmail() {
        return bEmail;
    }
    public void setbEmail(String bEmail) {
        this.bEmail = bEmail;
    }
    public String getbUserName() {
        return bUserName;
    }
    public void setbUserName(String bUserName) {
        this.bUserName = bUserName;
    }
    public String getbBookingdate() {
        return bBookingdate;
    }
    public void setbBookingdate(String bBookingdate) {
        this.bBookingdate = bBookingdate;
    }
    public String getbEventDate() {
        return bEventDate;
    }
    public void setbEventDate(String bEventDate) {
        this.bEventDate = bEventDate;
    }
    public String getbDescription() {
        return bDescription;
    }
    public void setbDescription(String bDescription) {
        this.bDescription = bDescription;
    }
    public String getbLocation() {
        return bLocation;
    }
    public void setbLocation(String bLocation) {
        this.bLocation = bLocation;
    }
    public int getbHeadCount() {
        return bHeadCount;
    }
    public void setbHeadCount(int bHeadCount) {
        this.bHeadCount = bHeadCount;
    }
    public double getbTotal() {
        return bTotal;
    }
    public void setbTotal(double bTotal) {
        this.bTotal = bTotal;
    }
    
    


}
