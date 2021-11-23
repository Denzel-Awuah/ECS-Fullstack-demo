package com.adminlte.demo.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployeeServiceImp implements EmployeeService {

	private EmployeesRepository employeeRepository;
	
	@Autowired
	public EmployeeServiceImp(EmployeesRepository theEmployeeRepository) {
		employeeRepository = theEmployeeRepository;
	}
	
	@Override
	public List<Employees> findAll() {
		return employeeRepository.findAll();
	}

	@Override
	public Employees findById(int theId) {
		Optional<Employees> result = employeeRepository.findById(theId);
		
		Employees theEmployee = null;
		
		if (result.isPresent()) {
			theEmployee = result.get();
		}
		else {
			// we didn't find the employee
			throw new RuntimeException("Did not find employee id - " + theId);
		}
		
		return theEmployee;
	}

	@Override
	public void save(Employees theEmployee) {
		employeeRepository.save(theEmployee);
	}

	@Override
	public void deleteById(int theId) {
		employeeRepository.deleteById(theId);
	}

}