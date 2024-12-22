let button = document.getElementById('button');
let palka = document.getElementById('palka');
let parus1 = document.getElementById('parus1');
let parus2 = document.getElementById('parus2');
let ship = document.getElementById('ship');

button.addEventListener('click', function() {
    button.style.webkitBorderBottomLeftRadius = '80px';
    button.style.webkitBorderBottomRightRadius = '80px';
    button.textContent = 'Поплыли!';
    palka.style.transform = 'rotate(90deg)';
    parus1.style.transform = 'scale(2, 2.5)';
    parus2.style.transform = 'scale(1, 2.5)';
    ship.style.left = '2000px';
 })