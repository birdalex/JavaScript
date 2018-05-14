function form(){
	let message=new Object();
	message.loading="Загрузка...";
	message.success="Спасио! Скоро мы с Вами свяжемся";
	message.failure="Что-то пошло не так....";

	let form=document.getElementsByClassName('main-form')[0],
		input=form.getElementsByTagName('input'),
		// contactForm=document.getElementsByClassName('contact-form')[0],
		contactForm=document.getElementById('form'),
		inputContact=contactForm.getElementsByTagName('input'),
		statusMessage=document.createElement('div');
		statusMessage.classList.add('status');
		form.addEventListener('submit',(event)=>{
			event.preventDefault();
			form.appendChild(statusMessage);

			let request=new XMLHttpRequest();
			request.open("POST",'server.php');
			request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

			let formData=new FormData(form);
			request.send(formData);
			request.onreadystatechange=function(){
				if(request.readyState<4) {
					statusMessage.innerHTML=message.loading;
				} else if (request.readyState===4) {
					if(request.status==200 && request.status<300) {
						statusMessage.innerHTML=message.success
					}
					
				}	else {
					statusMessage.innerHTML=message.failure;
				}
			}
			for(let i=0;i<input.length;i++) {
				input[i].value='';
			}
		});
		contactForm.addEventListener('submit',function(event){
			event.preventDefault();
			contactForm.appendChild(statusMessage);

			let request=new XMLHttpRequest();
			request.open("POST",'server.php');
			request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

			let formData=new FormData(contactForm);
			request.send(formData);
			request.onreadystatechange=function(){
				if(request.readyState<4) {
					statusMessage.innerHTML=message.loading;
				} else if (request.readyState===4) {
					if(request.status==200 && request.status<300) {
						statusMessage.innerHTML='good'
					}
					
				}	else {
					statusMessage.innerHTML=message.failure;
				}
			}
			for(let i=0;i<inputContact.length;i++) {
				inputContact[i].value='';
			}
		});
}
module.exports=form;