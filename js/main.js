const sumaryCart = document.querySelector('header .sumary-cart')
const closeIconSumary = document.querySelector('.sumary-cart .title-card img')
const iconMenuMobile = document.querySelector('header .nav-container .menu-mobile')
const navMenu = document.querySelector('header .nav-container nav')
const header = document.querySelector('header')

function showSumaryCart(){
    header.classList.toggle('active')
    sumaryCart.classList.toggle('active')
}

function closeSumaryCart(){
    header.classList.remove('active')
    sumaryCart.classList.remove('active')
}

function showMenu(){
    navMenu.classList.add('active')
}

function closeMenu(){
    navMenu.classList.remove('active')
}

iconMenuMobile.addEventListener('click', showMenu)