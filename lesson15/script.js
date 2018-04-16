// аЄбаНаКбаИб sum аДаОаЛаЖаНаА аВаОаЗаВбаАбаАбб баИаП аДаАаНаНбб true. абаОаВаЕбаИбб аЕб аНаА ббаО.

function sum(a, b) {
	return a + b > 10;
}
sum(2,3)

// ааЕбаЕаМаЕаНаНаАб num аДаОаЛаЖаНаА аБббб баАаВаНаА 5. абаОаВаЕбаИбб аНаА баОаОбаВаЕбббаВаИаЕ.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];
console.log(arr);
console.log(num);
// аЃаЗаНаАбб, ббаО аНаАаМ аВаЕбаНаЕб ббаНаКбаИб each аВ аДаАаНаНбб ббаЛаОаВаИбб. абаОаВаЕбаИбб аЕб аНаА баИаП аДаАаНаНбб, аКаОбаОббаЙ аОаНаА аВаОаЗаВбаАбаАаЕб,
// аНаА баОаОбаВаЕбббаВаИаЕ аОаЖаИаДаАаЕаМаОаМб баЕаЗбаЛббаАбб (аКаОбаОббаЙ аВб аПаОаЛббаИаЛаИ) аИ аНаА баВаОаЙббаВаО length.

var each = function(startArr, f){return f(startArr)};
var arr1 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(typeof(each));
console.log(each(arr1, myFunc));
let test=function(a,b){
	return a+b 
}
// console.log(sum(2,2));