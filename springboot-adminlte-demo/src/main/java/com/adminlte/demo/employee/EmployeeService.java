package com.adminlte.demo.employee;

import java.util.List;


public interface EmployeeService {

	public List<Employees> findAll();
	
	public Employees findById(int theId);
	
	public void save(Employees theEmployee);
	
	public void deleteById(int theId);
	
}
