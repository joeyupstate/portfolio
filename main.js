const nav = document.querySelector(".nav");
const visbleNav = document.querySelector(".visible-nav")
const hamburgerButton = document.querySelector(".hamburger-icon")
const closeIcon = document.querySelector(".close-icon")
const nameTitle = document.querySelector(".name-title")
const viewWorkButton = document.querySelector("#view-work-button")
const arrowIcon= document.querySelector(".arrow-icon")
const arrowIconRotated= document.querySelector(".arrow-icon-rotated")
const projectSection =document.querySelector("#projects");
const menuList =document.querySelectorAll("li")
const tacoPizzaContainer = document.getElementById("taco-pizza-container");
const linkButton = document.querySelectorAll(".icon-buttons")[5];
const contactSection = document.getElementById("contact")
const body = document.querySelector("body")





//this is a function that resets the nav is the screen size changes
const reSizer = ()=>{
    var screenWidth = document.documentElement.clientWidth || window.innerWidth;
    if (screenWidth > 1200 && nav.classList.contains("visible-nav")) {
        nav.classList.toggle("visible-nav")
        closeIcon.style.display = "none"
        nameTitle.classList.toggle("name-title-blur")

}
else if (screenWidth < 1200){
    console.log("the screen is too small")
}
}


//this calls the above function
window.onresize = reSizer

//This handles the opening of the mobile menu
hamburgerButton.addEventListener("click", function(){

nav.classList.toggle("visible-nav")
nameTitle.classList.toggle("name-title-blur")
closeIcon.style.display="block"
})

//This closes the mobile menu
closeIcon.addEventListener("click", function(){
    nav.classList.toggle("visible-nav")
    nameTitle.classList.toggle("name-title-blur")
    closeIcon.style.display ="none"
})

//this turns the arrow in the view work button 
viewWorkButton.addEventListener("mouseenter", function(){
    arrowIcon.style.transform="rotate(90deg)"
})

//this makes the arrow go rightside up in the view work button 
viewWorkButton.addEventListener("mouseleave", function(){
    arrowIcon.style.transform="none"
})

//This is the function for clicking on the project link in the nav
//it brings us to the section and makes sure the menu stays correct depending on the screen size
menuList[0].addEventListener("click",function(){
  
    var screenWidth = document.documentElement.clientWidth || window.innerWidth;
    if (screenWidth <= 1200) {
        projectSection.scrollIntoView();
        nav.classList.toggle("visible-nav")
        nameTitle.classList.toggle("name-title-blur")
    
    } 
    else {
        projectSection.scrollIntoView();
       }
    
    })

//This is the function for clicking on the contact link in the nav
//it brings us to the section and makes sure the menu stays correct depending on the screen size

menuList[2].addEventListener("click",function(){
var screenWidth = document.documentElement.clientWidth || window.innerWidth;
if (screenWidth <= 1200) {
    contactSection.scrollIntoView();
    nav.classList.toggle("visible-nav")
    nameTitle.classList.toggle("name-title-blur")

} 
else {
    contactSection.scrollIntoView();
   }

})
    


