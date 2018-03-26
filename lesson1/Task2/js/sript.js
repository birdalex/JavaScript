let num=33721;//33721 ;
let n1=num/10000;
n1=parseInt(n1);
let n2=(num%100)/10;
let n3=num%10;
n2=parseInt(n2);
let n4=(num%1000)/100;
n4=parseInt(n4);
let n5=(num%10000)/1000;
n5=parseInt(n5);
let res=n1*n2*n3*n4*n5
console.log(res);
let res1=res**3;
alert(res1);

