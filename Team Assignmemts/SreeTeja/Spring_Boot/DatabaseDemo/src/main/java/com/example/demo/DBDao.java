package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface DBDao extends JpaRepository<Employee,Integer>{
   public List<Employee> findByDesignation(String designation);
   @Query("from Employee where eid>?1 order by age desc")
   public List<Employee> getEmployeesInSortedByAge(int eid);
}
