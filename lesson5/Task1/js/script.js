// let adv=document.getElementsByClassName('adv');
// let column=document.querySelectorAll('.column');
// let remove=column[1].removeChild(adv[0]);

let menu=document.querySelector('.menu'),
	changeItem=document.getElementsByClassName('menu-item'),			
	text=document.querySelector('.title'),
	li=document.createElement('li');
	adv=document.getElementsByClassName('adv'),
	adv=document.querySelector('.adv'),
text.innerHTML='Мы продаем только подленную технику Apple';	// замена загловка 
document.body.style.backgroundImage='url(./img/apple_true.jpg)'; // поменять заний фон
li.classList.add('menu-item');
li.innerHTML='Пятый пункт';
menu.appendChild(li); 											//добавить 5 пункт 
menu.insertBefore(changeItem[2],changeItem[1]);					// порядок элементов 
adv.remove();													// удаление рекламы						
let promptText=document.querySelector('.prompt');								
let interview=prompt('Ваше отношение к технике apple','');
promptText.innerHTML=interview;									// отношение к технике apple 

