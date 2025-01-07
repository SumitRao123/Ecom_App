package com.Ecommerce.Jayveer.Service;

import com.Ecommerce.Jayveer.Entities.Customer;
import com.Ecommerce.Jayveer.Repository.CustomerRepository;
import com.Ecommerce.Jayveer.Utility.UtilityClass;
import com.Ecommerce.Jayveer.payload.CustomerData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Customer_Service {

      @Autowired
      CustomerRepository customerRepository;

      public Customer savedCustomer(CustomerData customerData){

            Customer customer = UtilityClass.conversion(customerData);


            try{
                  Customer customer1 =  customerRepository.save(customer);
                  if(customer1 == null) {
                         throw new Exception();
                  }
                  return customer1;
            }catch (Exception ex){
                  System.out.println(ex.getMessage());
                  return null;
            }


      }

      public List<Customer> getAllCustomer(){
            return customerRepository.findAll();
      }

      public  List<Customer> fetchByName(String name){
             return customerRepository.findByName(name);
      }

      public List<Customer> fetchByFatherName(String name){ return customerRepository.findByFatherName(name);}

      public List<Customer> fetchByAddress(String address){
              return customerRepository.findByAddress(address);
      }


      public  Customer UpdateCustomer(String name,Customer updateCustomer){
            customerRepository.updateByName(name,updateCustomer);
            return updateCustomer;
      }
      public boolean deleteRecord(String name){
            List<Customer> customer = customerRepository.findByName(name);
            if(customer.isEmpty()) return false;
            customerRepository.delete(customer.get(0));
            return true;
      }


}
