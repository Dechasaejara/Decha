"use strict";

/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

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

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

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





// Dark Mode Swithcer
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});


// change header bg when scroll
const header1 = document.querySelector(".header");

function changeHeaderBackground() {
  if (window.scrollY > 10) {
    header1.classList.add("scrolled");
  } else {
    header1.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", changeHeaderBackground);

// Show dynamic btn
const cards = document.querySelectorAll(".portfolio-card");
cards.forEach((card) => {
  const button = card.querySelector(".dynamic-btn");

  card.addEventListener("mouseenter", () => {
    button.style.visibility = "visible";
  });

  card.addEventListener("mouseleave", () => {
    button.style.visibility = "hidden";
  });
});

// Create popup

// Get all the "See More" buttons
const seeMoreButtons = document.querySelectorAll(".dynamic-btn");

// Get the popup overlay and content
const popupOverlay = document.querySelector(".popup-overlay");
const popupContent = document.querySelector(".popup-content");

// Attach click event listener to each button
seeMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cardDiv = button.parentElement;
    const img = cardDiv.querySelector(".img-holder img");
    const likesDiv = cardDiv.querySelector(".portfolio-card-tags .likes");
    const p = cardDiv.querySelector("p");
    const link = cardDiv.querySelector("a");

    // Extract the text content and attribute content
    const imgSrc = img.getAttribute("src");
    const imgAlt = img.getAttribute("alt");
    const likesCount = likesDiv.querySelector("span").textContent;
    const paragraphText = p.textContent;
    const linkText = link.textContent;

    // Set the popup content
    popupContent.innerHTML = `
<section class="section">
  <div class="container detail-page">
    <span class="close-btn">&times;</span>
    <div class="detail-info">
      <span>Feature - Maui E-Commerce App</span>
      <h2 class="title-lg">${paragraphText}</h2>
      <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
      <div class="detail-btns ">
      <a href="https://github.com/Dechasaejara/Decha-Portfolio" class=" btn btn-primary " id="">View Project</a>
      <a class=" btn btn-tertiary ">Like This One</a>
      </div>

    </div>

      <div class="img-holder">
        <img src="${imgSrc}" loading="lazy"
            alt="${imgAlt}" class="img-cover" />
      </div>
  </div>
</section>

    `;

    // Display the popup
    popupOverlay.style.display = "block";
  });
});

//Attach click event listener to the close button
popupOverlay.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("close-btn") ||
    event.target.classList.contains("popup-overlay")
  ) {
    // Hide the popup
    popupOverlay.style.display = "none";
  }
});

/// Resume Tabs
function openTab(evt, tabName) {
  // Hide all tab content
  const tabContent = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  // Remove 'active' class from all tab buttons
  const tabButtons = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  // Show the selected tab content and mark the button as active
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}


// Testimonial Coursel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const interval = 3500; // Time between each slide change

function startCarousel() {
  setInterval(nextSlide, interval);
}

function showSlide(index) {
  const slides = carousel.querySelectorAll('img');
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 2; // Update the number to match the total number of slides
  }
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > 2) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentIndex);
startCarousel();