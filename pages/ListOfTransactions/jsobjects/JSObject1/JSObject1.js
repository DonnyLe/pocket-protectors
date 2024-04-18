export default {
	myVar1: [],
	myVar2: {},
	calculateTotal () {
		let totalSum = 0;

		// Iterate through each transaction and accumulate the total cost
		get_transactions.data.forEach(transaction => {
			// Calculate the cost for the current transaction
			const transactionCost = transaction.unit_cost * transaction.quantity;

			// Add the transaction cost to the total sum
			totalSum += transactionCost;
		});
		return totalSum;

	}

}