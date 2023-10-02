"use strict";

const hambMenu = document.querySelector("#hamb-menu");
const body = document.body;
const hambButton = document.querySelector("#hamb-button");
const hambLink = document.querySelector("#hamb-link");
const france = document.querySelector("#france");
const germany = document.querySelector("#germany");
const england = document.querySelector("#england");

hambButton.addEventListener("click", handleHamb);
hambLink.addEventListener("click", closeMenu);
france.addEventListener("click", showFrance);
germany.addEventListener("click", showGermany);
england.addEventListener("click", showEngland);

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

function showFrance() {
  
}

function showGermany() {
  
}

function showEngland() {
 
}
