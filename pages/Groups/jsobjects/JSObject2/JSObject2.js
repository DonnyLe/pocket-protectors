export default {
	Button1onClick () {
		const admin = all_users.data.find(user => user.email === Input1.text);
		
		// update the stored value for user.group_id
		 storeValue("user.group_id", admin.group_id)
		
		// If user is found, return the user object, otherwise return null
		return admin.group_id || null;
	}
}