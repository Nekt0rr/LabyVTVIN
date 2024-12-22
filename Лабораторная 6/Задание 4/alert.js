let button = document.getElementById('btn');
button.addEventListener('click',function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 + num2
    document.getElementById("result").innerHTML = result;
});
