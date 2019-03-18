package com.domain.service;

import java.util.List;

import com.domain.entity.Customer;


public interface CustomerService {

	List<Customer> getFormList();
	
	Customer createForm(Customer formData);
	
	Customer findById(int custId); 
	
	Customer deleteForm(int custId);
	
	Customer updateForm (Customer custData);
	
}
