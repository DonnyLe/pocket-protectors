export default {
	Button1onClick () {
		const user = all_users.data.find(user => user.email === Email.text && user.password === Password.text);
    storeValue("user_id", user.user_id, true) 
		// If user is found, return the user object, otherwise return null
		return user || null;
	}
}