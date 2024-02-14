package com.example.appdev.service;

import java.util.List;

import com.example.appdev.modal.Login;
import com.example.appdev.modal.LoginDto;





public interface LoginService {

	String addUser1(LoginDto user1dto);

	List<Login> getUser1();

	

}