package com.domain.service;


import com.domain.entity.User;


public interface LoginService {

	
	User registerUser(User user);
	
	User authenticateUser(String uid, String password) throws Exception;
	
	
}
