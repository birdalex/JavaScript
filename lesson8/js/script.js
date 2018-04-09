window.addEventListener('DOMContentLoaded',function(){

	let tab=document.getElementsByClassName('info-header-tab'),
		tabContent=document.getElementsByClassName('info-tabcontent'),
		info=document.getElementsByClassName('info-header')[0],
		more =document.querySelector('.more'),
		overlay=document.querySelector('.overlay'),
		close=document.querySelector('.popup-close'),
		menu=document.getElementsByTagName('nav')[0],
		disbtn=document.querySelector('.description-btn')[0];
		console.log(disbtn);
													//tabs

	function hideContent(a) {
		for(let i=a;i<tabContent.length;i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}
	}
	hideContent(1);
	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			hideContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	info.addEventListener('click', function(event) {
		let target=event.target;
		if(target.className=='info-header-tab') {
			for(let i=0;i<tab.length;i++) {
				if(target==tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
														//end
														// timer
	function timerLeft(year,month,day) {
		setInterval(function(){
		let hours=document.querySelector('.hours'),
			minutes=document.querySelector('.minutes'),
			seconds=document.querySelector('.seconds'),
			dateNow=Date.parse(new Date()),
			dateFinish=new Date(year,month,day),
			// dateFinish=Date.parse
			sec=Math.floor((dateFinish-dateNow)/1000),
			secToMinutes=sec%3600,
			hoursNum=Math.floor(sec/3600),
			minutesNum=Math.floor(secToMinutes/60),
			seconsNum=secToMinutes%60;
			hours.innerHTML=hoursNum;
			minutes.innerHTML=minutesNum;
			seconds.innerHTML=seconsNum;
			// console.log(dateFinish);
			},1000)
	}

	timerLeft(2018,03,06);
														//end
														//Модальное окно
	more.addEventListener('click',
		function(){
			this.classList.add=('more-splah');
			overlay.style.display='block';
			document.body.style.overflow = 'hidden';
		});
	close.addEventListener('click',function(){
			overlay.style.display='none';
			more.classList.remove('more-splah');
			document.body.style.overflow = '';
	});
														//end
														//Scroll
	function animate(draw,duration) {
		let start=performance.now();
		requestAnimationFrame(function animate(time) {
			let timePassed=time-start;
			if(timePassed>duration) {
				timePassed=duration
			}

			draw(timePassed);

			if(timePassed<duration){
				requestAnimationFrame(animate);
			}
		})
	};
	menu.addEventListener('click',function(e) {
		e.preventDefault();
		animate(function(timePassed) {
			let target=e.target;
			let section=document.getElementById(target.getAttribute('href').slice(1));
			window.scrollBy(0,section.getBoundingClientRect().top/20-3);
		},1500);
	});

														//end
	disbtn.addEventListener('click',
		function(){
			this.classList.add=('more-splah');
			overlay.style.display='block';
			document.body.style.overflow = 'hidden';
		});
});