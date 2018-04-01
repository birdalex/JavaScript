let menu=document.querySelector('.menu'),
	changeItem=document.getElementsByClassName('menu-item'),			
	text=document.querySelector('.title'),
	li=document.createElement('li'),
	adv=document.querySelector('.adv'),
	test=document.getElementsByClassName('title');
text.innerHTML='Мы продаем только подленную технику Apple';	// замена загловка 
document.body.style.backgroundImage='url(./img/apple_true.jpg)'; // поменять заний фон
li.classList.add('menu-item');
li.innerHTML='Пятый пункт';
menu.appendChild(li); 											//добавить 5 пункт 
menu.insertBefore(changeItem[2],changeItem[1]);					// порядок элементов 
adv.innerHTML='';
adv.classList.remove('adv');									// удаление рекламы 
let interview=prompt('Ваше отношение к технике apple','');
console.log(interview);
