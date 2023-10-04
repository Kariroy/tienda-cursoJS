const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopCar = document.querySelector(".navbar-shopping-cart");
const shopCarMenu = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu)
menu.addEventListener("click", toggleMenu)
shopCar.addEventListener("click", toggleShopCar)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive")
    shopCarMenu.classList.add("inactive")
}

function toggleMenu() {
    mobileMenu.classList.toggle("inactive");
    shopCarMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
}

function toggleShopCar() {
    shopCarMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
}