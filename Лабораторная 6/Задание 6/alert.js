let div = document.getElementById('container');
div.onclick = function() {
    if(event.target.tagName === 'BUTTON') {
        let block = event.target.parentElement; 
        block.remove();
    }
};