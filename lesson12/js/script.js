$(document).ready(function(){
  // alert('Структура страницы сформирована, можно приступать!');
  $('.main_btna, .contact, a[href ^= "#sh"]').on('click', function(){
  	$('.overlay').fadeIn(2000);
  	$('.modal'). slideDown(2000);
  	$('.close').on('click',function(){
  		$('.modal').slideUp(2000);
  		$('.overlay').fadeOut(2000);
  	})
  })
});
