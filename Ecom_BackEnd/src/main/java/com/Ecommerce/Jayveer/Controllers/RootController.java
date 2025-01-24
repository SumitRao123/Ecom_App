package com.Ecommerce.Jayveer.Controllers;


import com.Ecommerce.Jayveer.Entities.Customer;
import com.Ecommerce.Jayveer.Service.Customer_Service;
import com.Ecommerce.Jayveer.Utility.UtilityClass;
import com.Ecommerce.Jayveer.payload.CustomerData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public  ResponseEntity<?> getAllCustomers(@RequestParam(value= "pageNumber",defaultValue = "1",required = false) Integer pageNumber,
                                              @RequestParam(value = "pageSize",defaultValue = "10",required = false) Integer pageSize){
//        System.out.println(pageNumber + " " + pageSize);
        List<Customer> ls = customerService.getAllCustomer(pageNumber,pageSize);
        if(ls == null) return ResponseEntity.ok("No Customers found");
        return ResponseEntity.ok(ls);
    }

    @GetMapping("/get/byId/{id}")
    public ResponseEntity<?> getById(@PathVariable String id){
//        System.out.println(name);
        Customer ls = customerService.fetchById(id);
//        System.out.println(ls);
         if(ls == null) return ResponseEntity.ok("No Customer with this found");

         return ResponseEntity.ok(ls);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?>  updateByName(@PathVariable String id,@RequestBody CustomerData updatedCustomerData){


        Customer UpdatedCustomer = UtilityClass.conversion(updatedCustomerData);
//        System.out.println(UpdatedCustomer);
//        UpdatedCustomer.setId(id);
        Customer customer = customerService.UpdateCustomer(id, UpdatedCustomer);

          return ResponseEntity.ok(customer);
    }

    @GetMapping("/get/{query}")
    public  ResponseEntity<?> getByOption(@PathVariable String query, @RequestParam(value= "pageNumber",defaultValue = "1",required = false) Integer pageNumber,
                                          @RequestParam(value = "pageSize",defaultValue = "10",required = false) Integer pageSize){

        System.out.println(query);
        List<Customer> customers = customerService.getByWord(query,pageNumber,pageSize);

       if(customers.isEmpty()) return ResponseEntity.badRequest().body("No Customer Found");

       return ResponseEntity.ok(customers);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable String id){
          boolean flag = customerService.deleteRecord(id);
          Map<String,String> mp = new HashMap<>();
          if(!flag) {

              return ResponseEntity.badRequest().body("Customer not Deleted");
          }
          mp.put("message","Customer Deleted Successfully");
          return ResponseEntity.accepted().body(mp);
    }



}
