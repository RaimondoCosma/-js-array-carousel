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
// for ( let i = 0; i < carouselImg.length; i++ ) {
//     let itemContent = `<div class="item"><img src="${carouselImg[i]}"></div>`;
//     imgContainer.insertAdjacentHTML('beforeend', itemContent);
// };

// Provo un altro metodo. Problemi con aggiungere altre classi al template literal
for (let i = 0; i < carouselImg.length; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    if(i === 0) {
        item.classList.add("active");
    }
    const img = document.createElement("img");
    img.setAttribute("src", carouselImg[i]);
    item.append(img);
    imgContainer.append(item);
}