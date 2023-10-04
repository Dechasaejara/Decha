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

// const header = document.querySelector("[data-header]");

// const activeHeader = function () {
//   window.scrollY > 50 ? header.classList.add("active ")
//     : header.classList.remove("active ");
// }

// window.addEventListener("scroll", activeHeader);



// change header bg when scroll
const header1 = document.querySelector('.header');

function changeHeaderBackground() {
  if (window.scrollY > 10) {
    header1.classList.add('scrolled');
  } else {
    header1.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', changeHeaderBackground);

// Show dynamic btn
const cards = document.querySelectorAll('.portfolio-card');
const popupContainer = document.querySelector('#popup-container');
const closeBtn = document.getElementById('popup-close-btn');


cards.forEach(card => {
  const button = card.querySelector('.dynamic-btn');

  card.addEventListener('mouseenter', () => {
    button.style.visibility = 'visible';
  });

  card.addEventListener('mouseleave', () => {
    button.style.visibility = 'hidden';
  });


  button.addEventListener('click', function () {
    centerPopup();
    popupContainer.style.display = 'flex'; // Show the popup

  });


});

// Create popup

closeBtn.addEventListener('click', function () {
  popupContainer.style.display = 'none'; // Hide the popup
});

function centerPopup() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const popupWidth = popupContainer.offsetWidth;
  const popupHeight = popupContainer.offsetHeight;

  const left = (viewportWidth - popupWidth) / 2;
  const top = (viewportHeight - popupHeight) / 2;

  popupContainer.style.left = `${left}px`;
  popupContainer.style.top = `${top}px`;
}

window.addEventListener('resize', centerPopup);
