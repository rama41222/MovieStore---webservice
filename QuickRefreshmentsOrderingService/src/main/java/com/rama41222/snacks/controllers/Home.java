package com.rama41222.snacks.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:9000")
@RestController
public class Home {
	
	@RequestMapping("/")
	public String sayHello(){
		return "Quick Refreshment Ordering Service Api v1.0.0 - Powered By Rama41222";
	}
}
