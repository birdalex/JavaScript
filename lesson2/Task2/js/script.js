// ) Создать массив week и записать в него дни недели

// ·        Вывести на экран все дни недели

// ·        Каждый из них с новой строчки

// ·        Выходные дни - жирным шрифтом

// ·        Текущий день - курсивом
var week=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
for (var i = 0; i < week.length; i++) {
	document.write(week[i]+'<b>'+'<br>');
