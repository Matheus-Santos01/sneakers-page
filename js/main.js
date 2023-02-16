const sumaryCart = document.querySelector('.cart-container .sumary-cart')
const closeIconSumary = document.querySelector('.sumary-cart .title-card img')
const navMenu = document.querySelector('header .nav-container nav')
const iconMenuMobile = document.querySelector('header .nav-container .menu-mobile')

function showSumaryCart(){
    sumaryCart.classList.toggle('active')
}

function showMenu(){
    navMenu.classList.add('active')
}

function closeElement(element){
    console.log(`Fechei o elemento`, element)
    element.classList.remove('active')
}

iconMenuMobile.addEventListener('click', showMenu)