window.addEventListener('DOMContentLoaded',function(){
								// Modal
	let popupBtn=document.querySelector('.popup-btn'),
		overlay=document.querySelector('.overlay'),
		custom=document.querySelector('.custom'),
		main=document.querySelector('.main'),
		customInfo=document.querySelector('.custom-info'),
		customChar=document.querySelector('.custom-char'),
		customStyle=document.querySelector('.custom-style');


	popupBtn.addEventListener('click', function(){
		overlay.classList.add('fadeOut');
		main.style.display='none';
		custom.style.display='flex';
		customInfo.classList.add('fadeInDown');
		customInfo.style.display='block';
		customChar.classList.add('fadeInUp');
		customChar.style.display='block';
		customStyle.classList.add('fadeInDown');
		customStyle.style.display='block';


	});
	
});
