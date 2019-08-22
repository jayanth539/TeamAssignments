package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("address")
public class Address {
	
	@Value("Telangana")
	private String state;
	
	@Value("Hyderabad")
	private String city;
	
	@Value("500047")
	private int pin;

	public String getState() {
		return state;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	@Override
	public String toString() {
		return "Address [state=" + state + ", city=" + city + ", pin=" + pin + "]";
	}

	public void setCity(String city) {
		this.city = city;
	}
}
