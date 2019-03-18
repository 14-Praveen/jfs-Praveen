package com.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.domain.entity.User;
import com.domain.repository.UserRepository;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	UserRepository userRepository;
	String role;
	
@Override
public User registerUser(User user) {
	
	return userRepository.save(user);
		
}
	
@Override 
public User authenticateUser(String uid, String password) throws Exception{
	 
	System.out.println("In LoginServiceImpl");
	 
	 User user = userRepository.findOne(uid);
	 System.out.println("After LoginServiceImpl " +user);
	 
	 if (user != null){
		 if (password.equals(user.getPassword()))
		 {
			 System.out.println("Successful Authentication");
			 if (user.getRole() == 1){role = "Maker";} 
			 else if(user.getRole() == 2) {role = "Checker";}
			 else {role = "Invalid";}
			 System.out.println("Logged in as " +role);
		 }else{
			 System.out.println("Invalid Credentials...");
		 	  } 
		 return user;
		 }
	 else {
		 throw new Exception("Invalid Authentication");
	 	  }
	}


}
