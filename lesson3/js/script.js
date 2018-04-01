let yourBudget,
	yourShopName,
	price=prompt('Цена');
function start(){							// старт программы
  yourBudget=prompt("Введите Ваш бюджет","");
  while(isNaN(yourBudget) || yourBudget=='' || yourBudget==null){
  	yourBudget=prompt("Введите Ваш бюджет","");
  }
  	yourShopName=prompt("Введите название магазина","");
}
start();
let mainList={
	budget:yourBudget,
	shopName:yourShopName,
	shopGoods:[],
	employers:{

	},
	open:true,
	discount:true
};
function disSystem(){					// дисконтная система
	if(mainList.discount==true){
		let res=price*0.8;
		return res;
	}
};
function dayBudget(){					// бюджет на день
	return mainList.budget/30;
}
function hiringEmployers(){ 			// найм сотрудников
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
	
}
hiringEmployers();
for(let i=0; i<3;i++) {
		let a=prompt("Введите вид товара","");
		if(a!='' && (typeof(a))==='string' && a.length<50) {
			if(!isNaN(a)) {
				alert('Вы ввели число');
				i=i-1;
				continue;
			}
				mainList.shopGoods[i]=a;
		}
		else if(a===null) {
			break;
		}
		else {
			alert('Вы ничего не ввели,Повторте попытку');
			i=i-1;
		}	
};
alert('Ваш бюджет на один день ='+dayBudget());
alert('Новая цена ='+disSystem());
console.log(mainList);
