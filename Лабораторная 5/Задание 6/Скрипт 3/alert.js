function getExpression(a, b, c) {
 return (a - b) / c;
}

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let num3 = Number(prompt("Введите третье число:"));

let result = getExpression(num1, num2, num3);
alert(result);
