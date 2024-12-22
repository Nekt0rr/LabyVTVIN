const button = document.getElementById('Content')
button.addEventListener('click', function() {
    for(let i = 0; i < 3; i++)
    document.querySelectorAll('.pr')[i].innerHTML = [i + 1];
});