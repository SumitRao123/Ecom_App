package com.Ecommerce.Jayveer.Repository;


import com.Ecommerce.Jayveer.Entities.Customer;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepositoryCustom {
    List<Customer> searchByFatherNameOrNameOrDairyNoOrPageNo(String fatherName, String name, Integer dairyNo, Integer pageNoInDairy);
    void updateByName(String name, Customer updatedCustomer);
    void updateByFatherName(String fatherName, Customer updatedCustomer);
    void updateByAddress(String address, Customer updatedCustomer);
    void updateByAmount(String amount, Customer updatedCustomer);
}