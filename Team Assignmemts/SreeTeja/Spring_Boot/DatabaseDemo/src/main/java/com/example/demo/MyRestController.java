package com.example.demo;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class MyRestController {
	 @Autowired
	 DBDao dao;
	 
	 @GetMapping("/employees")
     public List<Employee> getEmployees() {
    	 return dao.findAll();
     }
	 
	 @GetMapping("/employees/{eid}")
     public Optional<Employee> getEmployeeById(@PathVariable("eid") int eid) {
    	 return dao.findById(eid);
     }
}
