class product{
    constructor(name,price,image){
        this.name = name,
        this.price = price,
        this.image = image
    }

}
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopCar = document.querySelector(".navbar-shopping-cart");
const shopCarMenu = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container")
const productList = [];

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

function newProduct(name,price,image){
    let producto = new product(name,price,image);
    productList.push(producto)
}

function insertar(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        let div = document.createElement("div")
        div.classList.add("product-card")
        let clase = arreglo[i].name
        div.classList.add(clase)
        div.innerHTML = `
        <img src=${arreglo[i].image} alt="">
        <div class="product-info">
        <div>
        <p>${arreglo[i].name}</p>
        <p>$ ${arreglo[i].price}</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
        </div>
        `
        cardsContainer.appendChild(div)
    }
}





newProduct("bike",200,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
newProduct("cuadro",200,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
newProduct("cuatrio",200,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
newProduct("skate",200,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
newProduct("pelota",200,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
newProduct("moto",200,"https://motos-b60.kxcdn.com/sites/default/files/yamaha-r6-race-2022.jpg")

insertar(productList)
