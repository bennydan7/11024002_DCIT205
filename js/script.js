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
