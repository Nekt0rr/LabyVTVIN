function checkSum(a,b){
 let sum = a + b;
    if (sum > 10) {
        return true; 
    } else {
        return false; 
    }
}
let num1=Number(prompt("Vvedite chislo a"));
let num2=Number(prompt("Vvedite chislo b"));
let result=symma(num1,num2);
alert(result);