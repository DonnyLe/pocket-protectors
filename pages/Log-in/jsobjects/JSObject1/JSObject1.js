export default {
	Button1onClick () {
		const user = all_users.data.find(user => user.email === Email.text && user.password === Password.text);
		storeValue("user_id", user.user_id, true)

		//store user data
		storeValue("user", {
			"user_id": user.user_id,
			"email": user.email,
			"first_name": user.first_name,
			"group_id": user.group_id,
			"last_name": user.last_name,
			"middle_name": user.middle_name,
			"password": user.password
		})
		//store all user data
		storeValue("users", all_users.data)

		// If user is found, return the user object, otherwise return null
		return user || null;
	}
}