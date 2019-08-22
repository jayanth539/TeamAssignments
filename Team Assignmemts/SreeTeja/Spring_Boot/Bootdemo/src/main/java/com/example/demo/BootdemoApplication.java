package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BootdemoApplication {

	public static void main(String[] args) {
		                                                                           //can use getBean(Employee.class)
		Employee e=(Employee)SpringApplication.run(BootdemoApplication.class, args).getBean("emp");
		System.out.println(e);
	}

}
