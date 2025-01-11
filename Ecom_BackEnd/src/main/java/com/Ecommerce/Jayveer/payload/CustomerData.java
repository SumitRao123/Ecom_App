package com.Ecommerce.Jayveer.payload;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class CustomerData {


    String name;
    @JsonProperty("Fathername")
    private String fatherName;

    @JsonProperty("Phone_number")
    private String phoneNumber;

    String  dairyNo;
    String pageNoInDairy;
    String address;
    @JsonProperty("amount")
    String amount;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for 'Fathername'
    public String getFathername() {
        return fatherName;
    }

    public void setFathername(String Fathername) {
        this.fatherName = Fathername;
    }

    // Getter and Setter for 'Phone_number'
    public String getPhone_number() {
        return phoneNumber;
    }

    public void setPhone_number(String Phone_number) {
        this.phoneNumber = Phone_number;
    }

    // Getter and Setter for 'dairyNo'
    public String getDairyNo() {
        return dairyNo;
    }

    public void setDairyNo(String  dairyNo) {
        this.dairyNo = dairyNo;
    }

    // Getter and Setter for 'pageNoInDairy'
    public String getPageNoInDairy() {
        return pageNoInDairy;
    }

    public void setPageNoInDairy(String pageNoInDairy) {
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
