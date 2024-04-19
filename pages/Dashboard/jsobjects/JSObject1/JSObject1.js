export default {
	
	getTotalExpenses () {
		let totalSum = 0;
		get_receipt.data.forEach(receipt => totalSum += parseInt(receipt.total_amount));
		return totalSum;
	}
}