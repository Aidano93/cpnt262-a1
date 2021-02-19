'use strict'

// variables created to target html elements button and nav

const nav = document.querySelector(".nav-main")
const menu = document.querySelector(".h-menu")

// on click toggle function. displaying and hiding nav menu

menu.addEventListener('click', function(){
  nav.classList.toggle("showNav")
  menu.classList.toggle("showX")
})
