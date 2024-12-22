function checkChisla(a, b) {
    if (a == b) {
        return true; 
    } else {
        return false;
    }
}

let num1 = Number(prompt("Введите число a"));
let num2 = Number(prompt("Введите число b"));

let result = checkChisla(num1, num2);
alert(result);