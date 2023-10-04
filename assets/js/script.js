"use strict";

/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// const preloader = document.querySelector("[data-preloader]");
// window.addEventListener("load", function () {
//   setTimeout(function () {
//    preloader.classList.add("loaded");
//    document.body.classList.add("loaded");
//   }, 500);
// });


// footer text
const currentYearElement = document.querySelector(".copyright");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = `\u00A9 ${currentYear} copyright all right reserved.`;


/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);

