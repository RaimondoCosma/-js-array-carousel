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
    // 3. Aggiungiamo gli eventi sul bottone:
    //  Mi conservo una variabile con valore di active = 0;
    let active = 0;
    // 4. Evento bottone per elemento successivo
    const next = document.querySelector(".next");
    next.addEventListener('click', function() {   
        // if (active >= carouselImg.length - 1) {
        //     imgContainer.querySelectorAll(".item")[active].classList.remove("active");
        //     active -= carouselImg.length - 1;
        //     imgContainer.querySelectorAll(".item")[active].classList.add("active");
        // }
        imgContainer.querySelectorAll(".item")[active].classList.remove("active");
        if ( active === carouselImg.length -1 ) {
            active = 0;
        } else {
            active += 1;
        }
        imgContainer.querySelectorAll(".item")[active].classList.add("active");
    })

    // 5. Evento bottone per elemento precedente
    const prev = document.querySelector(".prev");
    prev.addEventListener('click', function() {   
        imgContainer.querySelectorAll(".item")[active].classList.remove("active");
        if (active === 0) {
            active = carouselImg.length - 1;
        } else {
            active -= 1;
        }
        imgContainer.querySelectorAll(".item")[active].classList.add("active");
    })
}
