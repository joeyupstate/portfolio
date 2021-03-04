const nav = document.querySelector(".nav");
const visbleNav = document.querySelector(".visible-nav")
const hamburgerButton = document.querySelector(".hamburger-icon")
const closeIcon = document.querySelector(".close-icon")
const nameTitle = document.querySelector(".name-title")
const viewWorkButton = document.querySelector("#view-work-button")
const arrowIcon= document.querySelector(".arrow-icon")
const arrowIconRotated= document.querySelector(".arrow-icon-rotated")


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

viewWorkButton.addEventListener("mouseenter", function(){
    arrowIcon.style.transform="rotate(90deg)"
})

viewWorkButton.addEventListener("mouseleave", function(){
    arrowIcon.style.transform="none"
})