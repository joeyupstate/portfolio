const nav = document.querySelector(".nav");
const visbleNav = document.querySelector(".visible-nav")
const hamburgerButton = document.querySelector(".hamburger-icon")
const closeIcon = document.querySelector(".close-icon")
const nameTitle = document.querySelector(".name-title")


hamburgerButton.addEventListener("click", function(){

nav.classList.toggle("visible-nav")
nameTitle.classList.toggle("name-title-blur")
closeIcon.style.display="block"
})


closeIcon.addEventListener("click", function(){
    nav.classList.toggle("visible-nav")
    nameTitle.classList.toggle("name-title-blur")
    closeIcon.style.display ="none"
})