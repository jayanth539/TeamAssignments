package com.example.demo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MyController {
	
	@RequestMapping("/")
	public String login() {
		return "login.jsp";
	}
	
	@RequestMapping("/verify")
	public ModelAndView greet(User user) {
		ModelAndView mv = new ModelAndView();
		if(user.getUname().equals(user.getUpass())) {
			
			mv.addObject("obj",user);
			mv.setViewName("welcome.jsp");
			return mv;
		}
		else {
			mv.setViewName("invalid.jsp");
			return mv;
		}
		
		
	}
	
}
