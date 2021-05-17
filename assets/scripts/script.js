// Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// Footer
const date = new Date();
const year = date.getFullYear();

const footerYear = document.getElementById('footer-year');
footerYear.innerHTML = year;