package com.example.appdev.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity    
public class PaymentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pId;
    private String pEmail;
    private String pPayDate;
    private String pEventName;
    private int pTotal;
    private String pMode;
    public long getpId() {
        return pId;
    }
    public void setpId(long pId) {
        this.pId = pId;
    }
    public String getpEmail() {
        return pEmail;
    }
    public void setpEmail(String pEmail) {
        this.pEmail = pEmail;
    }
    public String getpPayDate() {
        return pPayDate;
    }
    public void setpPayDate(String pPayDate) {
        this.pPayDate = pPayDate;
    }
    public String getpEventName() {
        return pEventName;
    }
    public void setpEventName(String pEventName) {
        this.pEventName = pEventName;
    }
    public int getpTotal() {
        return pTotal;
    }
    public void setpTotal(int pTotal) {
        this.pTotal = pTotal;
    }
    public String getpMode() {
        return pMode;
    }
    public void setpMode(String pMode) {
        this.pMode = pMode;
    }
    public Boolean getpStatus() {
        return pStatus;
    }
    public void setpStatus(Boolean pStatus) {
        this.pStatus = pStatus;
    }
    private Boolean pStatus;
    public PaymentDetails(long pId, String pEmail, String pPayDate, String pEventName, int pTotal, String pMode,
            Boolean pStatus) {
        this.pId = pId;
        this.pEmail = pEmail;
        this.pPayDate = pPayDate;
        this.pEventName = pEventName;
        this.pTotal = pTotal;
        this.pMode = pMode;
        this.pStatus = pStatus;
    }
    public PaymentDetails(){
        
    }
    @Override
    public String toString() {
        return "PaymentDetails [pId=" + pId + ", pEmail=" + pEmail + ", pPayDate=" + pPayDate + ", pEventName="
                + pEventName + ", pTotal=" + pTotal + ", pMode=" + pMode + ", pStatus=" + pStatus + "]";
    }
    
    
}
