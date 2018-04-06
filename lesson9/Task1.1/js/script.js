    
    let age = document.getElementById('age');
  
    function showUser(surname, name) {
    	surname=prompt('Фамилия', '');
    	name=prompt('Имя','');
    	this.value=age.value;
             alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
     
    showUser();