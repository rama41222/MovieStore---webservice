package com.rama41222.restaurants.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rama41222.restaurants.entities.Restaurant;
import com.rama41222.restaurants.services.ReservationService;

@CrossOrigin(origins = "http://localhost:9000")
@RestController
public class Restaurants {

	@Autowired
	private ReservationService reservationService;
	
	@RequestMapping("/restaurants")
	public List<Restaurant> getAllRestaurants(){
		return reservationService.getAllRestaurants();
	} 
	
	@RequestMapping(value="/restaurants/{id}")
	public Restaurant getRestaurantById(@PathVariable("id") String id){
		return reservationService.getRestaurantById(id);
	}
	
	@CrossOrigin(origins = "http://localhost:9000")
	@RequestMapping(value="/restaurants/location/{location}")
	public Restaurant getRestaurantByLocation(@PathVariable("location") String location){
		return reservationService.getRestaurantByLocation(location);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/restaurants")
	public String addRestaurant(@RequestBody Restaurant restaurant){
		if(reservationService.addRestaurant(restaurant)){
			return "Sucess";
		}else{
			return "Failed to add a new Topic";
		}
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/restaurants/{id}")
	public String updateRestaurant(@PathVariable("id") String id, @RequestBody Restaurant restaurant){
		if(reservationService.updateRestaurant(id, restaurant)){
			return "Update Success!";
		}
		return "Update failed";
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/restaurants/{id}")
	public String deleteRestaurant(@PathVariable("id") String id){
		
		if(reservationService.deleteRestaurant(id)){
			return "Restaurant Deleted Success";
		}
		return "Delete Failed";
	}

}
