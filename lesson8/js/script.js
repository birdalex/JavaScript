window.addEventListener('DOMContentLoaded',function(){

	let tab=document.getElementsByClassName('info-header-tab'),
		tabContent=document.getElementsByClassName('info-tabcontent'),
		info=document.getElementsByClassName('info-header')[0];
		console.log(tabContent);
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


});