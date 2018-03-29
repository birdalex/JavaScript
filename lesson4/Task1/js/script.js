let yourBudget,
	yourShopName;
	price=prompt('Цена');

function start() {							// старт программы
  yourBudget=prompt("Введите Ваш бюджет","");
  while(isNaN(yourBudget) || yourBudget=='' || yourBudget==null){
  	yourBudget=prompt("Введите Ваш бюджет","");
  }
  yourShopName=prompt("Введите название магазина","");

};
start();
let mainList={
	budget:yourBudget,
	shopName:yourShopName,
	shopGoods:[],
	employers:{

	},
	shopItems:[],
	open:true,
	discount:true,
	disSystem:function disSystem(){					// дисконтная система
		if(mainList.discount){
		let res=price*0.8;
		return res;
		}
	},
	dayBudget:function dayBudget(){					// бюджет на день
		return mainList.budget/30;
	},
	hiringEmployers:function hiringEmployers(){ 			// найм сотрудников
		for(let i=0;i<4;i++) {
		let employerName=prompt('Введити ваше имя');
			if(employerName!='' && (typeof(employerName))==='string' && employerName.length<50){
				if(!isNaN(employerName )){
					alert('Вы ввели число');
					i=i-1;
					continue;
				}
			mainList.employers[i] = i+1 + ' - ' + employerName;
			}
			else {
				alert('Вы ничего не ввели,Повторте попытку');
				i=i-1;
			}
		}
		
	},
	chooseShopItems:function chooseShopItems(){							// Ввод товаров
		let items=prompt('Перечислите через запятую товары',"");
		while(!isNaN(items)|| (typeof(items))=='' && (typeof(items)===null)) {
			items=prompt('Еще раз',"");
		};
			mainList.shopItems=items.split(",");
			let temp=prompt('Подождите еще',"");
			while(!isNaN(temp)|| (typeof(temp))=='' && (typeof(temp)===null)) {
			temp=prompt('Еще раз',"");
		};
			mainList.shopItems.push(temp);
			
			mainList.shopItems.sort();
	},
	
};
mainList.chooseShopItems(); 

for(let i=0; i<3;i++) {
let a=prompt("Введите вид товара","");
	if(a!='' && (typeof(a))==='string' && a.length<50) {
		if(!isNaN(a)) {
			alert('Вы ввели число');
				i=i-1;
			continue;
		}
				mainList.shopGoods[i]=a;
				mainList.shopGoods.sort();
	}
	else if(a===null) {
			break;
	}
	else {
		alert('Вы ничего не ввели,Повторте попытку');
				i=i-1;
	}	
};

mainList.shopGoods.forEach(function(item,i) {						// у нас вы можете купить 

	console.log("У нас вы можете купить: "+[i+1]+":"+item);

});

for(let key in mainList) {											// свойства магазина
	console.log("Наш магазин включает в себя "+key);
}
mainList.hiringEmployers();

alert('Ваш бюджет на один день ='+mainList.dayBudget());
alert('Новая цена ='+mainList.disSystem());
console.log(mainList);
