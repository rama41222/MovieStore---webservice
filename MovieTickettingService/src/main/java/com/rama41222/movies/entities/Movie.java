package com.rama41222.movies.entities;

 
import java.util.List;


public class Movie {
	
	private String id;
	private String name;
	private double price;
	private List<Theatre> locations;
	private List<String> showtimes;
	
	
	public Movie() {
		super();
	}
	
	public Movie(String id, String name, double price,List<Theatre> locations, List<String> showtimes) {
		super();
		this.id = id;
		this.name = name;
		this.locations = locations;
		this.showtimes = showtimes;
		this.price = price;
	}
	
	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Theatre> getLocations() {
		return locations;
	}
	public void setLocations(List<Theatre> locations) {
		this.locations = locations;
	}
	public List<String> getShowtimes() {
		return showtimes;
	}
	public void setShowtimes(List<String> showtimes) {
		this.showtimes = showtimes;
	}
	
	
	
}
