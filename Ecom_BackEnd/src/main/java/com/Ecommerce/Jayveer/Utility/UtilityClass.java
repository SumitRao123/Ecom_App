package com.Ecommerce.Jayveer.Utility;

import com.Ecommerce.Jayveer.Entities.Customer;
import com.Ecommerce.Jayveer.payload.CustomerData;

public class UtilityClass {
    public static Customer conversion(CustomerData customerData){
        System.out.println(customerData);
        Customer customer = new Customer();
        customer.setName(customerData.getName());
        customer.setFatherName(customerData.getFathername());
        customer.setAddress(customerData.getAddress());
        customer.setDairyNo(customerData.getDairyNo());
        customer.setPhoneNumber(customerData.getPhone_number());
        customer.setPageNoInDairy(customerData.getPageNoInDairy());
        customer.setAmount(customerData.getAmount());
        return customer;
    }
}
