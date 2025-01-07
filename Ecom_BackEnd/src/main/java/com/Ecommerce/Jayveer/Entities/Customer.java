package com.Ecommerce.Jayveer.Entities;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Customer")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
@Getter
@Builder

public class Customer {

     @Id
     String id;

     String name;
     @JsonProperty("Fathername")
     private String fatherName;
     @JsonProperty("Phone_number")
     private String phoneNumber;

     int dairyNo;
     int pageNoInDairy;
     String address;
     String amount;

     public String getName() {
          return name;
     }

     public void setName(String name) {
          this.name = name;
     }

     // Getter and Setter for 'fatherName'
     public String getFatherName() {
          return fatherName;
     }

     public void setFatherName(String fatherName) {
          this.fatherName = fatherName;
     }

     // Getter and Setter for 'phoneNumber'
     public String getPhoneNumber() {
          return phoneNumber;
     }

     public void setPhoneNumber(String phoneNumber) {
          this.phoneNumber = phoneNumber;
     }

     // Getter and Setter for 'dairyNo'
     public int getDairyNo() {
          return dairyNo;
     }

     public void setDairyNo(int dairyNo) {
          this.dairyNo = dairyNo;
     }

     // Getter and Setter for 'pageNoInDairy'
     public int getPageNoInDairy() {
          return pageNoInDairy;
     }

     public void setPageNoInDairy(int pageNoInDairy) {
          this.pageNoInDairy = pageNoInDairy;
     }

     // Getter and Setter for 'address'
     public String getAddress() {
          return address;
     }

     public void setAddress(String address) {
          this.address = address;
     }

     // Getter and Setter for 'amount'
     public String getAmount() {
          return amount;
     }

     public void setAmount(String amount) {
          this.amount = amount;
     }
}


