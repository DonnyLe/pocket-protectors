export default {
    myVar1: [],
    myVar2: {},
    calculateTotal () {
        let totalSum = 0;

        // Iterate through each transaction and accumulate the total cost
        get_transactions.data.forEach(transaction => {
            // Ensure unit cost and quantity are treated as floating point numbers if necessary
            const unitCost = parseFloat(transaction.unit_cost);
            const quantity = parseFloat(transaction.quantity);

            // Calculate the cost for the current transaction
            const transactionCost = unitCost * quantity;

            // Add the transaction cost to the total sum
            totalSum += transactionCost;
        });

        // Return the sum formatted as a string with two decimal places
        return totalSum.toFixed(2);
    }
}
