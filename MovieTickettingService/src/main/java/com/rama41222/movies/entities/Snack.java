package com.rama41222.movies.entities;

public class Snack {
	
	private String name;
	private double price;
	
	public Snack(String name, double price) {
		super();
		this.name = name;
		this.price = price;
	}

	
	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
