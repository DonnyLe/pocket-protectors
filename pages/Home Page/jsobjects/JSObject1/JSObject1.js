export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here

	},
	myFun2: async () => {
		const data = await getWorkOrders.data
		const monthCountArr = new Array(12).fill(0); 
    data.forEach(({ request_date }) => monthCountArr[new Date(request_date).getMonth()] += 1);
  return monthCountArr;
	}
}