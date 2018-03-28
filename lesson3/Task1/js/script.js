// let yourBudget=prompt("Введите Ваш бюджет","");
// let yourShopName=prompt("Введите название магазина","");
let price=prompt('Цена');
let mainList={
	// budget:yourBudget,
	// shopName:yourShopName,
	shopGoods:[],
	employers:{

	},
	open:true,
	discount:false
};
function disSystem(){
	if(!mainList.discount==true){
		let res=price-(price*0.8);
		alert('Your discount'+res)
	}
};
// function dayBudget(){
// 	return mainList.budget/30;
	
// }
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
// alert('Ваш бюджет на один день ='+dayBudget());
alert('Новая цена ='+disSystem());
console.log(mainList);
