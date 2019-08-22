package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DBDao;
import com.example.demo.model.Book;

@RestController
@RequestMapping("/web")
public class MyRestController {
	@Autowired
    DBDao dao;
	@GetMapping(value="hi")
	public String sayHi() {
		return "Hello World!";
	}
	
	@GetMapping("/books")
    public List<Book> getBook() {
   	 return dao.findAll();
    }
	
	@PutMapping("/update")
	public String updateBook(@RequestBody Book b) {
	  int id = b.getId();
	   if(dao.existsById(id)) {
		   dao.save(b);
		   return "Successfully updated";
	   }	  
	   else
		   return "Cannot find record";
    }
	
	@PostMapping("/add")
	public String addBook(@RequestBody Book b) {
		int id=b.getId();
		if(dao.existsById(id)) {
			   return "Record already exists";
		   }	  
		   else {
			   dao.save(b);
			   return "Sccessfully added";
		   }
			   
    }
	
	@DeleteMapping("/delete/{id}")
	public String deleteBook(@PathVariable("id") Integer id) {
		if(dao.existsById(id)) {
			dao.deleteById(id);
			return "Successfully Deleted record";
		}
		else {
			return "Record not found";
		}
	}
}
