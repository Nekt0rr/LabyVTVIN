let largeImg = document.getElementById('largeImg');
let ul = document.getElementById('thumbs').addEventListener('click', function() {
        let target = event.target;
        if(target.tagName === 'IMG') {
            largeImg.src = target.closest('a').href;
        }
        event.preventDefault();
});
