let btn=document.getElementById('open-btn'), 
	name=document.getElementsByClassName('name'), 
	nameValue=document.getElementsByClassName('name-value'), 
	budget=document.getElementsByClassName('budget'),
	budgetValue=document.getElementsByClassName('budget-value'),
	goods=document.getElementsByClassName('goods'),
	goodsValue=document.getElementsByClassName('goods-value'),
	items=document.getElementsByClassName('items'),
	itemsValue=document.getElementsByClassName('items-value'),
	employers=document.getElementsByClassName('employers'),
	employersValue=document.getElementsByClassName('employers-value'),
	discount=document.getElementsByClassName('discount'),
	discountValue=document.getElementsByClassName('discount-value'),
	isopen=document.getElementsByClassName('isopen'),
	isopenValue=document.getElementsByClassName('isopen-value'),
	goodsItem=document.querySelectorAll('.goods-item'),
	button=document.getElementsByTagName('button'),
	chooseGoods=document.querySelector('.choose-goods'),
	timeValue=document.querySelector('.time-value'),
	countBudgetValue=document.querySelector('.count-budget-value'),
	chooseItem=document.querySelector('.choose-item'),
	hireEmployersItem=document.querySelectorAll('.hire-employers-item');
	let goodsItemBtn=button[1];
	let countBudgetBtn=button[2];
	let hireEmployersBtn=button[3];

	
console.log(goodsItemBtn);
console.log(countBudgetBtn);
console.log(hireEmployersBtn);