package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MyController {
	@Autowired
    DBDao dao;
    
	@RequestMapping("/")
	public String Welcome() {
		return"welcome.jsp";
	}
	
	@RequestMapping("displayAll")
	@ResponseBody
	public String DisplayAll() {
		return dao.findAll().toString();
	}
	
	@RequestMapping("/displayEmp")
	@ResponseBody
	public Optional<Employee> DisplayById(@RequestParam("eid") int eid) {
		//Default it converts to json format if optional is used as return type
		return dao.findById(eid);
	}
	
	@RequestMapping("/displayEmpByDesig")
	@ResponseBody
	public List<Employee> DisplayByDesignation(@RequestParam("designation") String designation) {
		//Default it converts to json format if optional is used as return type
		return dao.findByDesignation(designation);
	}
	
	@RequestMapping("displayByAge")
	@ResponseBody
	public List<Employee> DisplayByAge(@RequestParam("eid") int eid) {
		return dao.getEmployeesInSortedByAge(eid);
	}
	
	@RequestMapping("insertEmp")
	@ResponseBody
	public String createEmployee( Employee e) {
		dao.save(e);
		return "Successfully Inserted";
	}
	
	@RequestMapping("updateEmp")
	@ResponseBody
	public String updateEmployee( Employee e) {
		int id =  e.getEid();
		if(dao.existsById(id)) {
			dao.save(e);
			return "Successfully Updated/Inserted record";
		}
		else {
			return "Record not found";
		}
		
	}
	
	@RequestMapping("deleteEmp")
	@ResponseBody
	public String deleteEmployee( @RequestParam("eid") int eid) {
		if(dao.existsById(eid)) {
			dao.deleteById(eid);
			return "Successfully Deleted record";
		}
		else {
			return "Record not found";
		}
		
	}
	
}
