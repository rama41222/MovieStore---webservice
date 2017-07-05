package com.rama41222.restaurants.entities;

public class Suite {

	private String type;
	private int accomodation;
	private double price;
	
	public Suite() {
		super();
	}

	public Suite(String type, int accomodation, double price) {
		super();
		this.type = type;
		this.accomodation = accomodation;
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getAccomodation() {
		return accomodation;
	}

	public void setAccomodation(int accomodation) {
		this.accomodation = accomodation;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	
	
}
