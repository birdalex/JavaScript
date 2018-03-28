let yourBudget=prompt("Введите Ваш бюджет","");
let yourShopName=prompt("Введите название магазина","");
let mainList={
	budget:yourBudget,
	shopName:yourShopName,
	shopGoods:[],
	employers:{

	},
	open:true
};
mainList.shopGoods[0]=prompt("Какой тип товаров будем продавать?","");
mainList.shopGoods[1]=prompt("Какой тип товаров будем продавать?","");
mainList.shopGoods[2]=prompt("Какой тип товаров будем продавать?","");
alert('Ваш бюджет на один день ='+mainList.budget/30);
console.log(mainList);


