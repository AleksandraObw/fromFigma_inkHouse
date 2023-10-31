"use strict"

const body = document.body
const hambMenu = document.getElementById('hamb-menu')
const hambButton = document.getElementById('hamb-button')
const hambLinks = document.querySelectorAll('.hamb-link')
const number = document.getElementById('number')
const numberMobile = document.getElementById('number-mobile')
const france = document.getElementById('france')
const germany = document.getElementById('germany')
const england = document.getElementById('england')
const output = document.getElementById("output")

let cartCount = 0

hambButton.addEventListener('click', handleHamb)
hambLinks.forEach(event => {
  event.addEventListener('click', closeMenu)
})

output.addEventListener('click', event => {
  if (event.target.classList.contains('button-addtocart')) {
    number.classList.remove('hidden')
    numberMobile.classList.remove('hidden')
    addToCart()
  }
})

france.addEventListener('click', showFrance)
germany.addEventListener('click', showGermany)
england.addEventListener('click', showEngland)

function handleHamb() {
  hambMenu.classList.toggle('hidden')
  hambButton.classList.toggle('opened')
  body.classList.toggle('noscroll')
}

function closeMenu() {
  hambMenu.classList.toggle('hidden')
  hambButton.classList.toggle('opened')
  body.classList.toggle('noscroll')
}

function addToCart() {
  cartCount++ 
  number.innerHTML = cartCount
  numberMobile.innerHTML = cartCount
}

function showGermany() {
  output.innerHTML = ''
  let jsonFile = `data/germany.json`
  fetch(jsonFile)
    .then((response) => response.json()) 
    .then((data) => {
      for (let i=0; i<data.result.length; i++) {
        fillList(data.result[i])
      }
})
}

function showFrance() {
  output.innerHTML = ''
  let jsonFile = `data/france.json`
  fetch(jsonFile)
    .then((response) => response.json()) 
    .then((data) => {
      for (let i=0; i<data.result.length; i++) {
        fillList(data.result[i])
      }
})
}

function showEngland() {
  output.innerHTML = ''
  let jsonFile = `data/england.json`
  fetch(jsonFile)
    .then((response) => response.json()) 
    .then((data) => {
      for (let i=0; i<data.result.length; i++) {
        fillList(data.result[i])
      }
})
}

function fillList(item) {
  output.innerHTML += `
        <li class="art-list__item item">
                    <article class="art-list__item-box item-box">
                        <img class="item-box__image item-image" src="${item.image}" alt="Картина">
                        <p class="item-box__author item-author">${item.name}</p>
                        <h3 class="item-box__title item-title">${item.title}</h3>
                        <p class="item-box__type item-type">${item.type}</p>
                        <p class="item-box__price item-price">${item.price}</p>
                        <button class="item-box__button button button-addtocart">В корзину</button>
                    </article>
                </li>`
}