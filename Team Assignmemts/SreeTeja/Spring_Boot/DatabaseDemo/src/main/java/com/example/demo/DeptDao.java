package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DeptDao extends JpaRepository<Department,Integer> {
	public List<Department> findByManager(String manager);
}
