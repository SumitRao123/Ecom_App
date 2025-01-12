package com.Ecommerce.Jayveer.Utility;

import com.Ecommerce.Jayveer.Entities.Customer;
import com.Ecommerce.Jayveer.payload.CustomerData;

public class UtilityClass {
    public static Customer conversion(CustomerData customerData){
        System.out.println(customerData);
        Customer customer = new Customer();
        customer.setName(customerData.getName().trim());
        customer.setFatherName(customerData.getFathername().trim());
        customer.setAddress(customerData.getAddress().trim());
        customer.setDairyNo(customerData.getDairyNo().trim());
        customer.setPhoneNumber(customerData.getPhone_number());
        customer.setPageNoInDairy(customerData.getPageNoInDairy().trim());
        customer.setAmount(customerData.getAmount());
        return customer;
    }
}
