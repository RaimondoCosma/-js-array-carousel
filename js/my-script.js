'use strict';
// 1. Creo la lista contenente le immagini
const carouselImg = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

// 2. Creo un ciclo for per inserire dinamicamente le immagini
const imgContainer = document.querySelector('.items');
for ( let i = 0; i < carouselImg.length - 1; i++ ) {
    itemContent = `<div class="item"><img src="${carouselImg[i]}"></div>`;
    imgContainer.innerHTML = itemContent;
}
