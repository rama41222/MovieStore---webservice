package com.rama41222.snacks.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rama41222.snacks.entities.Snack;
import com.rama41222.snacks.services.RefreshmentService;
@CrossOrigin(origins = "http://localhost:9000")
@RestController
public class Snacks {
	
	@Autowired
	private RefreshmentService refreshmentService;
	

	@RequestMapping("/snacks")
	public List<Snack> getAllSnacks(){
		return refreshmentService.getAllSnacks();
	}
	
	@RequestMapping(value="/snacks/{id}")
	public Snack getSnackById(@PathVariable("id") String id){
		return refreshmentService.getSnackById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/snacks")
	public String addSnack(@RequestBody Snack snack){
		if(refreshmentService.addSnack(snack)){
			return "Sucess";
		}else{
			return "Failed to add a new Snack";
		}
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/snacks/{id}")
	public String updateSnack(@PathVariable("id") String id, @RequestBody Snack snack){
		if(refreshmentService.updateSnack(id, snack)){
			return "Update Success!";
		}
		return "Update failed";
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/snacks/{id}")
	public String deleteSnack(@PathVariable("id") String id){
		
		if(refreshmentService.deleteSnack(id)){
			return "Snack Deleted Success";
		}
		return "Delete Failed";
	}

}
