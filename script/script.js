"use strict";

const hambMenu = document.querySelector("#hamb-menu");
const body = document.body;
const hambButton = document.querySelector("#hamb-button");
const hambLink = document.querySelector("#hamb-link");

hambButton.addEventListener("click", handleHamb);
hambLink.addEventListener("click", closeMenu);

function handleHamb() {
  hambMenu.classList.toggle("hidden");
  hambButton.classList.toggle("opened");
  body.classList.toggle("noscroll");
}

function closeMenu() {
  hambMenu.classList.add("hidden");
  hambButton.classList.remove("opened");
  body.classList.remove("noscroll");
}

// const france = document.querySelector("#france");
// const germany = document.querySelector("#germany");
// const england = document.querySelector("#england");
// const output = document.querySelector("#output");

// france.addEventListener("click", () => {
//   output.innerHTML = "";
//   fetch("data/france.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     for (let element of Object.keys(data)) {  
//       console.log(data);
//         output.innerHTML += `
//                 <li class="art-list__item item">
//                             <article class="art-list__item-box item-box">
//                                 <img class="item-box__image item-image" src="${element.image}" alt="Картина">
//                                 <p class="item-box__author item-author">${element.name}</p>
//                                 <h3 class="item-box__title item-title">${element.title}</h3>
//                                 <p class="item-box__type item-type">${element.type}</p>
//                                 <p class="item-box__price item-price">${element.price}</p>
//                                 <button class="item-box__button button button-addtocart">В корзину</button>
//                             </article>
//                  `;
//   };
// });
// });

// const localJsonGermany = "data/germany.json";
// const localJsonEngland = "data/england.json";
// const localJsonFrance = "data/france.json";

// germany.addEventListener("click", () => {
//   fetch(localJsonGermany)
//     .then((response) => {
//       return response.json();
//     }) 
//     .then((data) => 
//     {
//       for (element of data) {
//       console.log(element);
//       fillListJson(element);
//       };
//     });
// });

// france.addEventListener("click", () => {
//   fetch(localJsonFrance)
//     .then((response) => response.json()) 
//     .then((data) => {
//         for (element of data) {
//           fillListJson(element);
//       };
//     });
// });

// england.addEventListener("click", () => {
//   fetch(localJsonEngland)
//     .then((response) => response.json()) 
//     .then((data) => {
//         for (element of data) {
//           fillListJson(element);
//       };
//     });
// });

// function  fillListJson(item) {
//     output.innerHTML += `
//         <li class="art-list__item item">
//                     <article class="art-list__item-box item-box">
//                         <img class="item-box__image item-image" src="${element.image}" alt="Картина">
//                         <p class="item-box__author item-author">${element.name}</p>
//                         <h3 class="item-box__title item-title">${element.title}</h3>
//                         <p class="item-box__type item-type">${element.type}</p>
//                         <p class="item-box__price item-price">${element.price}</p>
//                         <button class="item-box__button button button-addtocart">В корзину</button>
//                     </article>
//                 </li>
//         `;
// }