package com.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.domain.entity.User;
import com.domain.service.LoginService;


@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping({"/login"})
public class LoginController {
	
    @Autowired
    private LoginService loginService;
    User userData = null;
    
    @PostMapping
    public User registerUser(@RequestBody User user){
    	System.out.println("In registerUser ");
        return loginService.registerUser(user);
    }
    
	@GetMapping(path = "/{uid}/{password}")
	public int UserLogin(@PathVariable ("uid") String uid,@PathVariable("password") String password) throws Exception{
		System.out.println("In UserLogin " +uid +" "+password);
		
		userData = loginService.authenticateUser(uid,password);
		
		return userData.getRole();
		
	}
	
	
	
	
}
