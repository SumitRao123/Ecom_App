package com.Ecommerce.Jayveer.Repository;

import com.Ecommerce.Jayveer.Entities.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String>,CustomerRepositoryCustom {

    // Basic query methods
    List<Customer> findByName(String name);
    List<Customer> findByFatherName(String fatherName);
    List<Customer> findByDairyNo(int dairyNo);
    List<Customer> findByPageNoInDairy(int pageNoInDairy);
    List<Customer> findByAddress(String address);
    @Query("{ $or: [ { 'name': { $regex: ?0, $options: 'i' } }, { 'fatherName': { $regex: ?0, $options: 'i' } }, { 'address': { $regex: ?0, $options: 'i' } } ] }")
    List<Customer> searchByWord(String keyword);


}