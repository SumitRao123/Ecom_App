package com.Ecommerce.Jayveer.Repository;

import com.Ecommerce.Jayveer.Entities.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class CustomerRepositoryCustomImpl implements  CustomerRepositoryCustom
{
    @Autowired
    private MongoTemplate mongoTemplate;



    @Override
    public List<Customer> searchByFatherNameOrNameOrDairyNoOrPageNo(String fatherName, String name, Integer dairyNo, Integer pageNoInDairy) {
        Query query = new Query();

        // Add conditions dynamically
        if (fatherName != null && !fatherName.isEmpty()) {
            query.addCriteria(Criteria.where("fatherName").is(fatherName));
        }
        if (name != null && !name.isEmpty()) {
            query.addCriteria(Criteria.where("name").is(name));
        }
        if (dairyNo != null) {
            query.addCriteria(Criteria.where("dairyNo").is(dairyNo));
        }
        if (pageNoInDairy != null) {
            query.addCriteria(Criteria.where("pageNoInDairy").is(pageNoInDairy));
        }

        return mongoTemplate.find(query, Customer.class);
    }

    @Override
    public void updateByName(String name, Customer updatedCustomer) {
        Query query = new Query(Criteria.where("name").is(name));
        Update update = new Update()
                .set("name", updatedCustomer.getName())
                .set("fatherName", updatedCustomer.getFatherName())
                .set("phoneNumber", updatedCustomer.getPhoneNumber())
                .set("dairyNo", updatedCustomer.getDairyNo())
                .set("pageNoInDairy", updatedCustomer.getPageNoInDairy())
                .set("address", updatedCustomer.getAddress())
                .set("amount", updatedCustomer.getAmount());
        mongoTemplate.updateFirst(query, update, Customer.class);
    }

    @Override
    public void updateByFatherName(String fatherName, Customer updatedCustomer) {
        Query query = new Query(Criteria.where("fatherName").is(fatherName));
        Update update = new Update()
                .set("name", updatedCustomer.getName())
                .set("fatherName", updatedCustomer.getFatherName())
                .set("phoneNumber", updatedCustomer.getPhoneNumber())
                .set("dairyNo", updatedCustomer.getDairyNo())
                .set("pageNoInDairy", updatedCustomer.getPageNoInDairy())
                .set("address", updatedCustomer.getAddress())
                .set("amount", updatedCustomer.getAmount());
        mongoTemplate.updateFirst(query, update, Customer.class);
    }

    @Override
    public void updateByAddress(String address, Customer updatedCustomer) {
        Query query = new Query(Criteria.where("address").is(address));
        Update update = new Update()
                .set("name", updatedCustomer.getName())
                .set("fatherName", updatedCustomer.getFatherName())
                .set("phoneNumber", updatedCustomer.getPhoneNumber())
                .set("dairyNo", updatedCustomer.getDairyNo())
                .set("pageNoInDairy", updatedCustomer.getPageNoInDairy())
                .set("address", updatedCustomer.getAddress())
                .set("amount", updatedCustomer.getAmount());
        mongoTemplate.updateFirst(query, update, Customer.class);
    }

    @Override
    public void updateByAmount(String amount, Customer updatedCustomer) {
        Query query = new Query(Criteria.where("amount").is(amount));
        Update update = new Update()
                .set("name", updatedCustomer.getName())
                .set("fatherName", updatedCustomer.getFatherName())
                .set("phoneNumber", updatedCustomer.getPhoneNumber())
                .set("dairyNo", updatedCustomer.getDairyNo())
                .set("pageNoInDairy", updatedCustomer.getPageNoInDairy())
                .set("address", updatedCustomer.getAddress())
                .set("amount", updatedCustomer.getAmount());
        mongoTemplate.updateFirst(query, update, Customer.class);
    }
}
