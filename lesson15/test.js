describe('Сумма', function(){
	it('Возращает ли значение true', function(){
		assert.typeOf(sum(1,2),'boolean', 'все правильно');
	});
});

describe('Значение переменной', function(){
	it('Переменная равна 5', function(){
		assert.equal(num, 5);
	});
});
describe('Тип данных функции each относится array', function(){
	it('Она относится', function(){
		assert.typeOf(each(arr1,myFunc),'array');
	});
});
describe('Свойта length', function(){
	it(' Равна 5', function(){
		assert.lengthOf(each(arr1,myFunc),5);
	});
});