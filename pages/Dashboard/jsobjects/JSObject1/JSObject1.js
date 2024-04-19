export default {
	
	getTotalExpenses () {
		let totalSum = 0;
		get_receipt.data.forEach(receipt => {
			totalSum += parseFloat(receipt.total_amount);
		});
		
		return totalSum.toFixed(2);
	}
}