package com.Ecommerce.Jayveer.Controllers;


import com.Ecommerce.Jayveer.Entities.Customer;
import com.Ecommerce.Jayveer.Service.Customer_Service;
import com.Ecommerce.Jayveer.Utility.UtilityClass;
import com.Ecommerce.Jayveer.payload.CustomerData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/App")
@CrossOrigin("*")
public class RootController {

    @Autowired
    Customer_Service customerService;

    @PostMapping
    public ResponseEntity<?> saveCustomer(@RequestBody CustomerData customerData){

        Customer customer = customerService.savedCustomer(customerData);
        if(customer == null) return ResponseEntity.badRequest().body("Customer not saved");
        return ResponseEntity.ok(customer);
    }

    @GetMapping("/getAll")
    public  ResponseEntity<?> getAllCustomers(){
        List<Customer> ls = customerService.getAllCustomer();
        if(ls == null) return ResponseEntity.ok("No Customers found");
        return ResponseEntity.ok(ls);
    }

    @GetMapping("/get/byname/{name}")
    public ResponseEntity<?> getByName(@PathVariable String name){
//        System.out.println(name);
        List<Customer> ls = customerService.fetchByName(name);
//        System.out.println(ls);
         if(ls == null) return ResponseEntity.ok("No Customer with this found");

         return ResponseEntity.ok(ls);
    }

    @PutMapping("/update/{name}")
    public ResponseEntity<?>  updateByName(@PathVariable String name,@RequestBody CustomerData updatedCustomerData){


        Customer UpdatedCustomer = UtilityClass.conversion(updatedCustomerData);
        System.out.println(UpdatedCustomer);
        Customer customer = customerService.UpdateCustomer(name, UpdatedCustomer);

          return ResponseEntity.ok(customer);
    }

    @GetMapping("/get/{field}/{query}")
    public  ResponseEntity<?> getByOption(@PathVariable String query,@PathVariable String field){

        List<Customer> customers = customerService.getByWord(query);

       if(customers.isEmpty()) return ResponseEntity.badRequest().body("No Customer Found");

       return ResponseEntity.ok(customers);
    }

    @DeleteMapping("/delete/{name}")
    public boolean deleteCustomer(@PathVariable String name){
          boolean flag = customerService.deleteRecord(name);
          if(!flag) return false;
          return true;
    }



}
