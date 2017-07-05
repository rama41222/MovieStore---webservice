package com.rama41222.restaurants.entities;

import java.util.List;

public class Restaurant {
	private String id;
	private String name;
	private String location;
	private List<Suite> suites;
	
public Restaurant() {
		super();

	}

public Restaurant(String id, String name, String location, List<Suite> suites) {
		super();
		this.name = name;
		this.id = id;
		this.location = location;
		this.suites = suites;
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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public List<Suite> getSuites() {
		return suites;
	}

	public void setSuites(List<Suite> suites) {
		this.suites = suites;
	}
	
}
