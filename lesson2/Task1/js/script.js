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
// for(let i=0; i<3;i++) {
// 		let a=prompt("Введите вид товара","");
// 		if(a!='' && (typeof(a))==='string' && a.length<50) {
// 			if(!isNaN(a)) {
// 				alert('Вы ввели число');
// 				i=i-1;
// 				continue;
// 			}
// 				mainList.shopGoods[i]=a;
// 		}
// 		else if(a===null) {
// 			break;
// 		}
// 		else {
// 			alert('Вы ничего не ввели,Повторте попытку');
// 			i=i-1;
// 		}	
// };
// alert('Ваш бюджет на один день ='+mainList.budget/30);
// console.log(mainList);
let count=0;
let i;
do{
	
	let i=0;
	let a=prompt("Введите вид товара","");
		if(a!='' && (typeof(a))==='string' && a.length<50) {
			if(!isNaN(a)) {
				alert('Вы ввели число');
				continue;
			}
				mainList.shopGoods[i]=a;
				// i++;
				count++;
		}
		else if(a===null) {
			break;
		}
		else {
			alert('Вы ничего не ввели,Повторте попытку');
		}	
		console.log(count);
}while(count<3);
console.log(mainList);
