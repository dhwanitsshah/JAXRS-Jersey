package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.model.User;

public class LoginHandler {

	public ArrayList<User> getAllUsers(Connection connection) throws Exception {
		ArrayList<User> userList = new ArrayList<User>();
		try {
			// String uname = request.getParameter("uname");
			PreparedStatement ps = connection
					.prepareStatement("SELECT * FROM user");
			// ps.setString(1,uname);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				User user = new User();
				user.setId(rs.getString("id"));
				user.setUsername(rs.getString("username"));
				user.setPassword(rs.getString("password"));
				userList.add(user);
			}
			return userList;
		} catch (Exception e) {
			throw e;
		}
	}

}