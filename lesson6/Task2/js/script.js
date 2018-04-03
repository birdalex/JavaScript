let openBtn=document.getElementById('open-btn'), 
	name=document.getElementsByClassName('name'), 
	nameValue=document.getElementsByClassName('name-value')[0], 
	budget=document.getElementsByClassName('budget'),
	budgetValue=document.getElementsByClassName('budget-value')[0],
	goods=document.getElementsByClassName('goods'),
	goodsValue=document.getElementsByClassName('goods-value')[0],
	items=document.getElementsByClassName('items'),
	itemsValue=document.getElementsByClassName('items-value')[0],
	employers=document.getElementsByClassName('employers'),
	employersValue=document.getElementsByClassName('employers-value')[0],
	discount=document.getElementsByClassName('discount'),
	discountValue=document.getElementsByClassName('discount-value')[0],
	isopen=document.getElementsByClassName('isopen'),
	isopenValue=document.getElementsByClassName('isopen-value')[0],
	goodsItem=document.getElementsByClassName('goods-item'),
	button=document.getElementsByTagName('button'),
	chooseGoods=document.querySelector('.choose-goods'),
	timeValue=document.getElementsByClassName('time-value')[0],
	countBudgetValue=document.getElementsByClassName('count-budget-value')[0],
	chooseItem=document.querySelector('.choose-item'),
	hireEmployersItem=document.querySelectorAll('.hire-employers-item'),
	goodsItemBtn=button[1],
	countBudgetBtn=button[2],
	hireEmployersBtn=button[3];
let yourBudget,
	yourShopName,
	yourDiscount;
	
								/*Открытие магазина*/
openBtn.addEventListener('click',()=>{
	yourBudget=prompt("Введите Ваш бюджет","");

    while(isNaN(yourBudget) || yourBudget=='' || yourBudget==null){
  	yourBudget=prompt("Введите Ваш бюджет","");
  }
  mainList.budget=yourBudget;
  budgetValue.textContent=yourBudget;
  yourShopName=prompt("Введите название магазина","").toUpperCase();
  nameValue.textContent=yourShopName;
  mainList.shopName=yourShopName;
  yourDiscount=prompt('Желаете подключить дисконтную систему? Введита "Да" или "Нет"');			/*Дисконт*/
   if(!yourDiscount.indexOf("да")||!yourDiscount.indexOf("Да")){
  	discountValue.style.backgroundColor='green';
  }
  
});

								/*Категория товаров*/
goodsItemBtn.addEventListener('click',()=>{
	for(let i=0; i<goodsItem.length;i++) {
		let a=goodsItem[i].value;
		if((typeof(a))==='string' && a.length<50 && isNaN(a)) {
			mainList.shopGoods[i]=a;
			goodsValue.textContent=mainList.shopGoods.sort();
		}
		
	}
});
								/*Найм рабочих*/
hireEmployersBtn.addEventListener('click',()=>{
	for(let i=0;i<hireEmployersItem.length;i++){
		let employersName=hireEmployersItem[i].value;
		if((typeof(employersName))==='string'&&employersName.length<50&&isNaN(employersName)) {
			mainList.employers[i]=employersName;
			employersValue.textContent+=mainList.employers[i]+',';
		}
		
	}
});

								/*продукты через запятую*/
chooseItem.addEventListener('change',()=>{

	let items=chooseItem.value;
		if(isNaN(items)&&items!=''){

			mainList.shopItems=items.split(",");
			mainList.shopItems.sort();
			console.log(mainList.shopItems);
			itemsValue.textContent=mainList.shopItems;
		}			
});
								/*Время*/
timeValue.addEventListener('change',()=>{
	let time=timeValue.value;

	if(time<0) {
		console.log('Такого не может быть!')
		mainList.open=false;
	}
	else if (time<8 && time<20) {
		console.log('Время работать');
		mainList.open=true;
	 }	
	 else if(time<24) {
	 	console.log('Уже слишком поздно!');
	 	mainList.open=false;
	 	}	
	 else {
	 	console.log('В сутках только 24 часа!');
	 	mainList.open=false;
	 	};
	 if(mainList.open==true) {
	 	isopenValue.style.backgroundColor = 'green';
	 	
	 } else {
	 	isopenValue.style.backgroundColor = 'red';
	 }
});
countBudgetBtn.addEventListener('click',()=>{
	countBudgetValue.value=mainList.budget/30;
	
});
let mainList={
	budget:yourBudget,
	shopName:yourShopName,
	shopGoods:[],
	employers:{

	},
	shopItems:[],
	open:false,
	discount:false,
	disSystem:function disSystem(){					
		if(mainList.discount){
		let res=price*0.8;
		return res;
		}
	},
	dayBudget:function dayBudget(){					
		return mainList.budget/30;
	}
};
console.log(mainList);
