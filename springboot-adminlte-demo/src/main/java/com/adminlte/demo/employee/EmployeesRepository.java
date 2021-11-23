package com.adminlte.demo.employee;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeesRepository extends JpaRepository<Employees, Integer> {

	// that's it ... no need to write any code LOL!

    //Optional<Employees> findEmployeeByFirstName();
    
}