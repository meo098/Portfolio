const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav-link')

const hamburgerHandler = () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
}

hamburger.addEventListener('click', hamburgerHandler);
navLink.forEach(item => item.addEventListener('click', hamburgerHandler ))