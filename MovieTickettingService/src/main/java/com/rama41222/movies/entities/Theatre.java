package com.rama41222.movies.entities;

public class Theatre {

	private String name;
	private String location;
	private int maxNoOfSeats;
	
	public Theatre() {
		super();
	}
	
	public Theatre(String name, String location,int maxNoOfSeats) {
		super();
		this.name = name;
		this.location = location;
		this.maxNoOfSeats = maxNoOfSeats;
	}
	
	public int getMaxNoOfSeats() {
		return maxNoOfSeats;
	}

	public void setMaxNoOfSeats(int maxNoOfSeats) {
		this.maxNoOfSeats = maxNoOfSeats;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
}
