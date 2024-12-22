const textBlock = document.getElementById('textBlock');
const imageBlock = document.getElementById('blastFinal');
const textBlock2 = document.getElementById('textBlock2');
const imageBlock2 = document.getElementById('blastFall');
const textBlock3 = document.getElementById('textBlock3');
const imageBlock3 = document.getElementById('iemDallas');
const textBlock4 = document.getElementById('textBlock4');
const imageBlock4 = document.getElementById('iemCologne');
const textBlock5 = document.getElementById('textBlock5');
const imageBlock5 = document.getElementById('iemKatowice');

imageBlock.addEventListener('mouseover', () => {
     textBlock.style.transform = 'translateX(646px)'; 
});

imageBlock.addEventListener('mouseout', () => {
     textBlock.style.transform = 'translateX(0)';
});  

imageBlock2.addEventListener('mouseover', () => {
     textBlock2.style.transform= 'translateX(646px)';
});

imageBlock2.addEventListener('mouseout', () => {
     textBlock2.style.transform= 'translateX(0)';
});

imageBlock3.addEventListener('mouseover', () => {
     textBlock3.style.transform= 'translateX(646px)';
});

imageBlock3.addEventListener('mouseout', () => {
     textBlock3.style.transform= 'translateX(0)';
});

imageBlock4.addEventListener('mouseover', () => {
     textBlock4.style.transform= 'translateX(646px)';
});

imageBlock4.addEventListener('mouseout', () => {
     textBlock4.style.transform= 'translateX(0)';
});

imageBlock5.addEventListener('mouseover', () => {
     textBlock5.style.transform= 'translateX(646px)';
});

imageBlock5.addEventListener('mouseout', () => {
     textBlock5.style.transform= 'translateX(0)';
});

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}