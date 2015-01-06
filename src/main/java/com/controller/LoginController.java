package com.controller;

import java.sql.Connection;
import java.util.ArrayList;

import com.model.User;
import com.dao.DbConnection;
import com.dao.LoginHandler;

public class LoginController {

	public ArrayList<User> getAllUsersList() throws Exception {
		ArrayList<User> userList = null;
		try {
			DbConnection database = new DbConnection();
			Connection connection = database.getConnection();
			LoginHandler loginHandler = new LoginHandler();
			userList = loginHandler.getAllUsers(connection);

		} catch (Exception e) {
			throw e;
		}
		return userList;
	}

}