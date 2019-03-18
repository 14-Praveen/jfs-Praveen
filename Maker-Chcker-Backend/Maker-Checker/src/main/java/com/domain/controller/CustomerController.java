package com.domain.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.entity.Customer;
import com.domain.service.CustomerService;



@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping({"/custForms"})
public class CustomerController {

	@Autowired
	private CustomerService customerService; 
	
	 @GetMapping (path = "/list")
	    public List<Customer> getFormList(){
		 System.out.println("In CustomerController.getFormList");
	        return customerService.getFormList();
	    }
	 
	 @GetMapping (path = "/getById/{formId}")
	    public Customer getFormById(@PathVariable("formId") int formId){
		 System.out.println("In CustomerController.getFormById");
	        return customerService.findById(formId);
	    }
	 
	 @PostMapping (path = "/create")
	 public Customer createForm (@RequestBody Customer formData){
		 System.out.println("In CustomerController.create");
		 return customerService.createForm(formData);
	    }

	 @DeleteMapping (path ={"/delete/{custId}"})
	 public Customer deleteForm (@PathVariable("custId") int custId){
		 System.out.println("In CustomerController.delete " + custId);
		 return customerService.deleteForm(custId);
	    }
	 
	 @PutMapping(path = {"/update/{formId}"})
	    public Customer updateForm(@PathVariable("formId") int formId, @RequestBody Customer custData){
		    custData.setCustId(formId);
	        return customerService.updateForm(custData);
	    }
	 
}