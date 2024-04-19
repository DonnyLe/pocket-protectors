export default {
	
	getTotalExpenses () {
		let totalSum = 0;
		get_receipt.data.forEach(receipt => totalSum+= receipt.total_amount);
		return totalSum;
	}
}