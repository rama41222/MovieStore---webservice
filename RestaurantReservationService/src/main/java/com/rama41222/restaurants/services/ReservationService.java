package com.rama41222.restaurants.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;
import com.rama41222.restaurants.entities.Restaurant;
import com.rama41222.restaurants.entities.Suite;

@Service
public class ReservationService {
	
	private List<Suite> suites1 = new ArrayList<>(Arrays.asList(
			new Suite("Living Suite", 5, 10000),
			new Suite("Delux Suite", 4, 6500),
			new Suite("Executive Suite", 4, 15000),
			new Suite("Luxuary Suite", 4, 20000),
			new Suite("General Suite", 4, 7500)
			
			));
	
	private List<Suite> suites2 = new ArrayList<>(Arrays.asList(
			new Suite("Living Suite", 5, 10000),
			new Suite("Delux Suite", 4, 6500),
			new Suite("General Suite", 4, 7500)
			
			));
	
	private List<Suite> suites3 = new ArrayList<>(Arrays.asList(
			new Suite("General Suite", 4, 7500)
			
			));

	private List<Suite> suites4 = new ArrayList<>(Arrays.asList(
			new Suite("Living Suite", 5, 10000),
			new Suite("Delux Suite", 4, 6500),
			new Suite("Luxuary Suite", 4, 20000),
			new Suite("General Suite", 4, 7500)
			
			));
	
	private List<Restaurant> restuarants =  new ArrayList<>(Arrays.asList(
			new Restaurant("r1", "Spice Garden Rest", "Wellawatte",suites1),
			 new Restaurant("r2", "Ozo kandy Rest", "Katugastota",suites2),
			 new Restaurant("r3", "Magic Villa Rest", "Gampaha",suites3),
			 new Restaurant("r4", "Spicy Foods Rest", "Maharagama", suites4),
			 new Restaurant("r5", "Eat Me Rest", "Colpity", suites1),
			 new Restaurant("r6", "Kings Cafe Rest", "Bambalapitiya", suites3),
			 new Restaurant("r7", "Knights Watch Rest", "Torrignton", suites2),
			 new Restaurant("r1", "Spice Garden Rest", "Bambalapitiya", suites1)
			 
			));

	public List<Restaurant> getAllRestaurants(){
		return restuarants;
	}
	
	public Restaurant getRestaurantById(String id){
		return restuarants.stream().filter(r->r.getId().equals(id)).findFirst().get();
	}
	
	public Restaurant getRestaurantByLocation(String location){
		return restuarants.stream().filter(r->r.getLocation().startsWith(location)).findFirst().get();
	}
	
	public boolean addRestaurant(Restaurant r){
		return restuarants.add(r);
	} 
	
    public boolean updateRestaurant(String id,Restaurant r){
    	Restaurant r1 = getRestaurantById(id);
    	int index = restuarants.indexOf(r1);
    	if(r1 != null && index >= 0){
    		restuarants.set(index, r);
    		return true;
    	}
		return false;
	} 
    
    public boolean deleteRestaurant(String id){
    	if(restuarants.removeIf(r->r.getId().equals(id))){
    		return true;
    	}
    	return false;
    }
	
	public boolean removeRestaurant(String id){
		return restuarants.remove(restuarants.stream().filter(r->r.getId().equals(id)).findFirst().get());
	} 
}
