package com.rama41222.snacks.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.rama41222.snacks.entities.Snack;

@Service
public class RefreshmentService {
	
	private List<Snack> snacks = new ArrayList<>(Arrays.asList(
			new Snack("s1","Pop Corn", 150),
			new Snack("s2","French Fries", 200),
			new Snack("s3","Fried Photato chips", 100),
			new Snack("s4","Fried Dhal with Sambol", 100),
			new Snack("s5","Hot Dogs", 100),
			new Snack("s6","Chiken Burgers", 200)
			));

	public List<Snack> getAllSnacks(){
		return snacks;
	}
	
	public Snack getSnackById(String id){
		return snacks.stream().filter(s->s.getId().equals(id)).findFirst().get();
	}
	
	public boolean addSnack(Snack s){
		return snacks.add(s);
	} 
	
    public boolean updateSnack(String id,Snack s){
    	Snack s1 = getSnackById(id);
    	int index = snacks.indexOf(s1);
    	if(s1 != null && index >= 0){
    		snacks.set(index, s);
    		return true;
    	}
		return false;
	} 
    
    public boolean deleteSnack(String id){
    	if(snacks.removeIf(s->s.getId().equals(id))){
    		return true;
    	}
    	return false;
    }
	
	public boolean removeSnack(String id){
		return snacks.remove(snacks.stream().filter(s -> s.getId().equals(id)).findFirst().get());
	} 

}
