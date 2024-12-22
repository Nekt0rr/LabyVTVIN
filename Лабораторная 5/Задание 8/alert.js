function getZnachenie(a,b){
 return (a > b) ? 1: 
 (a < b) ? -1:
 0;
}
let num1=Number(prompt("Vvedite chislo a"));
let num2=Number(prompt("VVedite chislo b"));
let result=getZnachenie(num1,num2);
alert(result);