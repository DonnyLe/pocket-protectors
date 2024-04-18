export default {
	Button1onClick () {
		const user = all_users.data.find(user => user.email === Email.text && user.password === Password.text);


		// If user is found, return the user object, otherwise return null
		return user || null;
	}
}