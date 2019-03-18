package com.domain.repository;

import java.util.List;

import org.springframework.data.repository.Repository;
import org.springframework.stereotype.Service;
import com.domain.entity.Customer;

@Service
public interface CustomerRepository extends Repository <Customer, Integer>{
	
	List <Customer> findAll();

	Customer save(Customer formData); 
	
	Customer findOne(int custId);
	
	void delete(Customer customer);
	
	
}
