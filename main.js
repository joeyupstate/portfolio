const nav = document.querySelector(".nav");
const visbleNav = document.querySelector(".visible-nav")
const hamburgerButton = document.querySelector(".hamburger-icon")
const nameTitle = document.querySelector(".name-title")


hamburgerButton.addEventListener("click", function(){

nav.classList.toggle("visible-nav")
nameTitle.classList.toggle("name-title-blur")
})

