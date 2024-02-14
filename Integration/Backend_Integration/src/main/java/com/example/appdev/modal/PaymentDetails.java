// package com.example.appdev.modal;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;

// @Entity  
// @Table(name = "payment")  
// public class PaymentDetails {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private long pId;
//     private String pEmail;
//     private String pPayDate;
//     private String pEventName;
//     private int pTotal;
//     private String pMode;
//     private Boolean pStatus;

//     public long getPId() {
//         return pId;
//     }
//     public void setPId(long pId) {
//         this.pId = pId;
//     }
//     public String getPEmail() {
//         return pEmail;
//     }
//     public void setPEmail(String pEmail) {
//         this.pEmail = pEmail;
//     }
//     public String getPPayDate() {
//         return pPayDate;
//     }
//     public void setPPayDate(String pPayDate) {
//         this.pPayDate = pPayDate;
//     }
//     public String getPEventName() {
//         return pEventName;
//     }
//     public void setPEventName(String pEventName) {
//         this.pEventName = pEventName;
//     }
//     public int getPTotal() {
//         return pTotal;
//     }
//     public void setPTotal(int pTotal) {
//         this.pTotal = pTotal;
//     }
//     public String getPMode() {
//         return pMode;
//     }
//     public void setPMode(String pMode) {
//         this.pMode = pMode;
//     }
//     public Boolean getPStatus() {
//         return pStatus;
//     }
//     public void setPStatus(Boolean pStatus) {
//         this.pStatus = pStatus;
//     }
//     public PaymentDetails(long pId, String pEmail, String pPayDate, String pEventName, int pTotal, String pMode,
//             Boolean pStatus) {
//         this.pId = pId;
//         this.pEmail = pEmail;
//         this.pPayDate = pPayDate;
//         this.pEventName = pEventName;
//         this.pTotal = pTotal;
//         this.pMode = pMode;
//         this.pStatus = pStatus;
//     }
//     public PaymentDetails(){
        
//     }
//     @Override
//     public String toString() {
//         return "PaymentDetails [pId=" + pId + ", pEmail=" + pEmail + ", pPayDate=" + pPayDate + ", pEventName="
//                 + pEventName + ", pTotal=" + pTotal + ", pMode=" + pMode + ", pStatus=" + pStatus + "]";
//     }
    
    
// }




package com.example.appdev.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity  
@Table(name = "payment")  
public class PaymentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pId;
    private String pEmail;
    private String pPayDate;  
    private String pEventName;
    private int pTotal;
    private String pMode;
    private Boolean pStatus;

    
    public PaymentDetails() {}

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

    // Getters and Setters
    public long getPId() {
        return pId;
    }

    public void setPId(long pId) {
        this.pId = pId;
    }

    public String getPEmail() {
        return pEmail;
    }

    public void setPEmail(String pEmail) {
        this.pEmail = pEmail;
    }

    public String getPPayDate() {
        return pPayDate;
    }

    public void setPPayDate(String pPayDate) {
        this.pPayDate = pPayDate;
    }

    public String getPEventName() {
        return pEventName;
    }

    public void setPEventName(String pEventName) {
        this.pEventName = pEventName;
    }

    public int getPTotal() {
        return pTotal;
    }

    public void setPTotal(int pTotal) {
        this.pTotal = pTotal;
    }

    public String getPMode() {
        return pMode;
    }

    public void setPMode(String pMode) {
        this.pMode = pMode;
    }

    public Boolean getPStatus() {
        return pStatus;
    }

    public void setPStatus(Boolean pStatus) {
        this.pStatus = pStatus;
    }

    @Override
    public String toString() {
        return "PaymentDetails [pId=" + pId + ", pEmail=" + pEmail + ", pPayDate=" + pPayDate + ", pEventName="
                + pEventName + ", pTotal=" + pTotal + ", pMode=" + pMode + ", pStatus=" + pStatus + "]";
    }
}

