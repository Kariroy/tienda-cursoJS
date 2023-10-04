const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");


menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    
}

const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


menu.addEventListener("click", toggleMenu)

function toggleMenu() {
    mobileMenu.classList.toggle("inactive");
    
}