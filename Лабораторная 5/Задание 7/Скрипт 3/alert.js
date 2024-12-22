function checkNegative(a){
 if (a < 0){
  return true;
 }
 else{
  return false;
 }
}
let num = Number(prompt("Vvedite chislo"));
let result=checkNegative(num);
alert(result);