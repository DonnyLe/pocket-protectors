export default {
	Button1onClick () {
		const admin = appsmith.store.users.find(user => user.email === Input1.text);


		// If user is found, return the user object, otherwise return null
		if(admin == undefined) {
			return appsmith.store.user.group_id;
		}
		else {
			return admin.group_id;
		}
	}
}