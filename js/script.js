'use strict';

// Function to toggle menu in small screen devices

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('menu-close');
const navbarlinks = document.querySelector('nav .navbar ul');

menuBtn.addEventListener('click', function () {
  navbarlinks.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  navbarlinks.classList.remove('active');
});

// Function for Auto typing text effect
const initializeTyped = function (elementSelector, text) {
  return new Typed(elementSelector, {
    strings: [text],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
};

// Implementation for Home page
document.addEventListener('DOMContentLoaded', function () {
  const typed1 = initializeTyped(
    '.auto-input1',
    'Department of Computer Science'
  );
});

// Implementation for About page
document.addEventListener('DOMContentLoaded', function () {
  const typed2 = initializeTyped('.auto-input2', 'About Us');
});

//Implementation for Undergraduate page
document.addEventListener('DOMContentLoaded', function () {
  const typed3 = initializeTyped(
    '.auto-input3',
    'Insight into Undergraduate Programmes'
  );
});

//Implementation for events page
document.addEventListener('DOMContentLoaded', function () {
  const typed4 = initializeTyped('.auto-input4', 'Events 📅✨');
});

//Implementaion for registration page
document.addEventListener('DOMContentLoaded', function () {
  const typed5 = initializeTyped('.auto-input5', 'Enroll Now🔁!');
});

//Implementaion for research page
document.addEventListener('DOMContentLoaded', function () {
  const typed6 = initializeTyped('.auto-input6', 'Research');
});

//Implementation for Faculty Page
document.addEventListener('DOMContentLoaded', function () {
  const typed6 = initializeTyped('.auto-input7', 'Faculty');
});

//Implementation for postgraduate page
document.addEventListener('DOMContentLoaded', function () {
  const typed6 = initializeTyped('.auto-input8', 'MSc and MPhil Programmes');
});

//Implementation for phD page
document.addEventListener('DOMContentLoaded', function () {
  const typed6 = initializeTyped('.auto-input9', 'PhD Programmes');
});
