package com.example.appdev.dto.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
	@Id
	@GeneratedValue
	private int Id;
	private String name;
	private String email;
	private String password;   
	private String company;
	private int phoneNumber;
	private String selectedRole;

   
	
}
