package com.service;

import java.util.ArrayList;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.GET;

import com.controller.LoginController;
import com.model.User;

@Path("/user")
public class LoginService {

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<User> login() {
		ArrayList<User> userList = null;
		try {
			LoginController loginController = new LoginController();
			userList = loginController.getAllUsersList();

		} catch (Exception e) {
			System.out.println("error");
		}
		return userList;
	}
}