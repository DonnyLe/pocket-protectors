export default {
	myVar1: [],
	myVar2: {},
	
	clear: () => {
		storeValue('hoursSum',null);
		storeValue('completedCount',null);
		storeValue('equipmentStats',null);
	},
	
	search: () => {
		if(selectAgent.selectedOptionValue.length==0){
			return select_work_orders.data
		}
		else{
			return(select_work_orders.data.filter(user => user.agent==(selectAgent.selectedOptionLabel)))
		}
	},
	
	totalHoursCalc: async() => {
		let sum = 0
		if(selectAgent.selectedOptionValue.length == 0)
	  sum = select_work_ordersPage.data.reduce((accumulator, object) => {
    return accumulator + object.hours;
}, 0);
		else 
			sum = select_work_ordersAgentPage.data.reduce((accumulator, object) => {
  return accumulator + object.hours;
}, 0);
			 storeValue('hoursSum',sum);

	},

	completedCalc: async() => {	
		await select_work_ordersPage.run()
		await select_work_ordersAgentPage.run()
		let count = 0

		if(selectAgent.selectedOptionValue.length == 0)
	  count = (select_work_ordersPage.data.filter((item) => item.completed == "Yes")).length;
		else 
		count = (select_work_ordersAgentPage.data.filter((item) => item.completed == "Yes")).length;

 storeValue('completedCount',count);
	},
	
	equipChart: async() => {
		await agent_stats.run()
		await agent_statsAgent.run()
		let chartData
		if(selectAgent.selectedOptionValue.length == 0)
	  chartData = agent_stats.data.map((gen) => {return {x: gen.equipment, y: gen.count }})

		else 
		chartData = agent_statsAgent.data.map((gen) => {return {x: gen.equipment, y: gen.count }})

    storeValue('equipmentStats',chartData);
		console.log(appsmith.store.equipmentStats)
	}
	
}