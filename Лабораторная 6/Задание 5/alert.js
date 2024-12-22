let input = document.getElementById('inputText');
let output = document.getElementById('outputText');
input.addEventListener('input',function() {
 output.textContent=input.value;
});
