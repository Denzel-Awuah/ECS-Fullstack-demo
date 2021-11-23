package com.adminlte.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.adminlte.demo.employee.Employees;
import com.adminlte.demo.employee.EmployeesRepository;

@SpringBootApplication
public class SpringbootAdminlteDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAdminlteDemoApplication.class, args);
	}

		
	
}
