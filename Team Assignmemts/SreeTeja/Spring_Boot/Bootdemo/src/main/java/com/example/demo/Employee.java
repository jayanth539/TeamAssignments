package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
//import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("emp")
@PropertySource("myresources.properties")
//@Scope("prototype") to create multiple objs of employee class
public class Employee {
	
	@Value("${myname.user}")
	private String name;
	
	@Value("45")
	private int age;
	
	@Value("7000000")
	private double salary;
	
	@Value("Manager")
	private String designation;
    
	@Autowired
	@Qualifier("address") //used to inject specific class if we have more than 1 type of address
	private Address empad;
	public Address getEmpad() {
		return empad;
	}

	public void setEmpad(Address empad) {
		this.empad = empad;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	@Override
	public String toString() {
		return "Employee [name=" + name + ", age=" + age + ", salary=" + salary + ", designation=" + designation
				+ ", empad=" + empad + "]";
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}
}
