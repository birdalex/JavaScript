var budget=prompt("Введите Ваш бюджет");
var shopName=prompt("Введите название магазина");
var shopGoods=[];
for(i=0;i<=2;i++){
	shopGoods[i]=prompt('Какой тип товаров будем продавать');
};
var mainList={
	budget,
	shopName,
	shopGoods,
	employers:{

	},
	open
};
document.write('Ваш бюджет на один день ='+budget/30);
console.log(mainList);


