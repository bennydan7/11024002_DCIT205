'use strict';

// Function to toggle menu in small screen devices.

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('menu-close');
const navbarlinks = document.querySelector('nav .navbar ul');

menuBtn.addEventListener('click', function () {
  navbarlinks.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  navbarlinks.classList.remove('active');
});
