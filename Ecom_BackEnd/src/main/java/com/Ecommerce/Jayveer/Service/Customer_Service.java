package com.Ecommerce.Jayveer.Service;

import com.Ecommerce.Jayveer.Entities.Customer;
import com.Ecommerce.Jayveer.Repository.CustomerRepository;
import com.Ecommerce.Jayveer.Utility.UtilityClass;
import com.Ecommerce.Jayveer.payload.CustomerData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

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

      public List<Customer> getAllCustomer(Integer pageNumber,Integer pageSize){
            Pageable p = PageRequest.of(pageNumber,pageSize);

            Page<Customer> page = customerRepository.findAll(p);
            List<Customer> ls  = page.getContent();
            return ls;
      }

      public  Customer fetchById(String id){

            return customerRepository.findById(id).get();
      }

      public List<Customer> fetchByFatherName(String name){ return customerRepository.findByFatherName(name);}

      public List<Customer> fetchByAddress(String address){
              return customerRepository.findByAddress(address);
      }


      public  Customer UpdateCustomer(String id,Customer updateCustomer){
            Optional<Customer> customer = customerRepository.findById(id);
            System.out.println(customer.get());
            customerRepository.updateByName(customer.get().getName(),updateCustomer);
            return updateCustomer;
      }
      public boolean deleteRecord(String id){
            Optional<Customer> customer = customerRepository.findById(id);
            if(customer.isEmpty()) return false;
            customerRepository.delete(customer.get());
            return true;
      }

      public  List<Customer> getByWord(String keyword,Integer pageNumber,Integer pageSize){
            Pageable pg = PageRequest.of(pageNumber,pageSize);

            Page<Customer> page = customerRepository.searchByWord(keyword,pg);
            if(page.getContent().isEmpty()){
                  return  customerRepository.searchByWord(keyword);
            }
            return page.getContent();
      }

}
