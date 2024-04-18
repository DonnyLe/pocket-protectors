export default {
		createOrJoin () {
		if (Group_Select.selectedOptionValue == "join") {
			{{showModal('Modal3');}}
		}
			else {
				{{showModal('Modal2');}}
			}
	}
}