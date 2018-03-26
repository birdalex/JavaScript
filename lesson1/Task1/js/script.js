let yourBudget=prompt("Введите Ваш бюджет","Введите Ваш бюджет");
let yourShopName=prompt("Введите название магазина","Введите название магазина");
let mainList={
	budget: 0,
	shopName:'',
	shopGoods:[],
	employers:{

	},
	open:true
};
mainList.shopGoods[0]=prompt("Какой тип товаров будем продавать?","Какой тип товаров будем продавать?");
mainList.shopGoods[1]=prompt("Какой тип товаров будем продавать?","Какой тип товаров будем продавать?");
mainList.shopGoods[2]=prompt("Какой тип товаров будем продавать?","Какой тип товаров будем продавать?");
alert('Ваш бюджет на один день ='+yourBudget/30);
console.log(mainList);


