window.addEventListener('DOMContentLoaded',function(){
								// Modal
	let popupBtn=document.querySelector('.popup-btn'),
		overlay=document.querySelector('.overlay'),
		custom=document.querySelector('.custom'),
		main=document.querySelector('.main'),
		customInfo=document.querySelector('.custom-info'),
		customChar=document.querySelector('.custom-char'),
		customStyle=document.querySelector('.custom-style'),
		mainCardsItem=document.getElementsByClassName('main-cards-item');
		console.log(mainCardsItem);


	popupBtn.addEventListener('click', function(){
		mainCardsItem[2].style.display='block';
		overlay.classList.add('fadeOut');
		overlay.style.display='none';
		main.style.display='none';
		custom.style.display='flex';
		customInfo.classList.add('fadeInDown');
		customInfo.style.display='block';
		customChar.classList.add('fadeInUp');
		customChar.style.display='block';
		customStyle.classList.add('fadeInDown');
		customStyle.style.display='block';


	});


	let readyBtn=document.getElementById('ready');// btn готово
	let personName=document.getElementById('name'),	// input name
		personAge=document.getElementById('age'), // input age
		selectViews=document.getElementById('select'),// selectd>options
		views=document.getElementsByClassName('views')[2],// div взглядов нов.карточки
		personBio=document.getElementById('bio'),// textarea
		personSex=document.getElementsByName('sex'),// выбор пола
		bio=document.getElementsByClassName('bio')[2],//dic биография нов. карточки
		person=document.querySelector('.person-easy'),//div с image 
		sex=document.getElementsByClassName('sex')[2];//div пол нов.карточка

		personName.value='';
		personAge.value='';
		personBio.value='';
		    

	let pass=false;
	let label=document.getElementsByTagName('label');
										//input name
	personName.addEventListener('change',function(){
		if((typeof(personName.value))==='string'&&personName.value!=''&&isNaN(personName.value)){
				label[0].textContent='Фамилия Имя Отчество';
				label[0].style.color='#04ff00';
				pass=true;
				
			}
			else {
				pass=false;
				label[0].textContent='Повторите попытку';
				label[0].style.color='red';
			}

	});
										// input age
	personAge.addEventListener('change',function(){
		if(personAge.value!=''&&!isNaN(personAge.value)&&personAge.value>=30&&personAge.value<=65){
			textContent='Возраст,лет';
				label[1].style.color='#04ff00';
				pass=true;
		}
		else{
			pass=false;
				label[1].textContent='Повторите попытку';
				label[1].style.color='red';
		}
	});
										// выбор пола
	 personSex[0].addEventListener('change',function(){	
		person.style.backgroundImage = 'url(img/construct-5.png)';
		sex.textContent=personSex[0].value;
	})
	 personSex[1].addEventListener('change',function(){
	 	person.style.backgroundImage = 'url(img/construct-1.png)';
	 	sex.textContent=personSex[1].value;
	 })

	 									// выбор пол. взглядов
	selectViews.addEventListener('change',function(){
		views.textContent=this.options[this.selectedIndex].value;
	})

										//btn Готово, если все true заполняем поля новой карточки
	readyBtn.addEventListener('click',function(){
	
		if(pass==true){
			let name=document.getElementsByClassName('name')[2],
				age=document.getElementsByClassName('age')[2];
				name.textContent=personName.value;
				age.textContent=personAge.value;
				views.textContent=selectViews.options[selectViews.selectedIndex].value;
				sex.textContent=personSex[0].value;
				bio.textContent=personBio.value;
				mainCardsItem[1].style.display='block';
				customInfo.classList.add('fadeOutDown');
				customInfo.classList.remove('fadeInDown');
				customChar.classList.add('fadeOutUp');
				customChar.classList.remove('fadeInUp');
				customStyle.classList.add('fadeOutDown');
				customStyle.classList.remove('fadeInDown');
				main.classList.add('fadeIn');
				custom.style.display='none';
				main.style.display='block';

				// customChar.style.display='none';
				// customInfo.style.display='none';
				// customStyle.style.display='none';
			}
		
			
	});
				
	
});
