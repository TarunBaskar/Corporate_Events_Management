package com.example.appdev.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class User1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;

    @Column(name = "useremail", unique = true)
    private String useremail;

    @Column(name = "date_of_birth")
    private String dateOfBirth;

    @Column(name = "gender")    
    private String gender;

    @Column(name = "location")
    private String location;

    public User1() {
    }

    public User1(Long userid, String useremail, String dateOfBirth, String gender, String location) {
        this.userid = userid;
        this.useremail = useremail;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.location = location;
    }

    @Override
    public String toString() {
        return "User [id=" + userid + ", useremail=" + useremail + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender
                + ", location=" + location + "]";
    }

    public Long getUserId() {
        return userid;
    }

    public void setUserId(Long userid) {
        this.userid = userid;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
