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
for(let i=0; i<3;i++) {
		let a=prompt("Введите вид товара","");
		if((typeof(a))!==null && a!='' && (typeof(a))==='string' && a.length<50) {
			if(!isNaN(a)) {
				alert('Вы ввели число');
				i=i-1;
				continue;
			}
				mainList.shopGoods[i]=a;
		}
		else {
			alert('Вы ничего не ввели,Повторте попытку');
			i=i-1;
		}	
};
alert('Ваш бюджет на один день ='+mainList.budget/30);
console.log(mainList);
// let count=0;
// let i=0;
// while(count<3){
// 	let a=prompt("Введите вид товара","");
// 		if((typeof(a))!==null && a!='' && (typeof(a))==='string' && a.length<50) {
// 			if(!isNaN(a)) {
// 				alert('Вы ввели число');
// 				continue;
// 			}
// 				mainList.shopGoods[i]=a;
// 				i++;
// 				count++;
// 		}
// 		else {
// 			alert('Вы ничего не ввели,Повторте попытку');
// 		}	
// }
// do{
// 	let a=prompt("Введите вид товара","");
// 		if((typeof(a))!==null && a!='' && (typeof(a))==='string' && a.length<50) {
// 			if(!isNaN(a)) {
// 				alert('Вы ввели число');
// 				continue;
// 			}
// 				mainList.shopGoods[i]=a;
// 				i++;
// 				count++;
// 		}
// 		else {
// 			alert('Вы ничего не ввели,Повторте попытку');
// 		}	
// }while(count<3);
// console.log(mainList);
