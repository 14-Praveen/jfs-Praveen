package com.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.domain.entity.Customer;
import com.domain.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerRepository custRepository;

	@Override
	public List<Customer> getFormList() {
		System.out.println("In CustomerServiceImpl.getFormList");
		return custRepository.findAll();

	}

	@Override
	public Customer createForm(Customer formData) {
		System.out.println("In CustomerServiceImpl.createForm");
		return custRepository.save(formData);
	}

	@Override
	public Customer deleteForm(int custId) {
		System.out.println("In CustomerServiceImpl.deleteForm");
		Customer customer = findById(custId);

		if (customer != null) {
			custRepository.delete(customer);
		}
		return customer;
	}

	@Override
	public Customer findById(int custId) {
		System.out.println("In CustomerServiceImpl.findById");
		return custRepository.findOne(custId);
	}

	@Override
	public Customer updateForm(Customer custData) {
		System.out.println("In CustomerServiceImpl.updateForm");
		return custRepository.save(custData);
		 
	}
}
