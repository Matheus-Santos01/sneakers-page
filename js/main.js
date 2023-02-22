const sumaryCart = document.querySelector('header .sumary-cart')
const closeIconSumary = document.querySelector('.sumary-cart .title-card img')
const iconMenuMobile = document.querySelector('header .nav-container .menu-mobile')
const navMenu = document.querySelector('header .nav-container nav')
const header = document.querySelector('header')
const modal = document.querySelector('dialog')
const closeIconModal = document.querySelector('dialog .content-modal .close-modal img')
let cart = []

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

function showModalProduct(){
 modal.showModal()   
}

function closeModalProduct(){
 modal.close()   
}

function changeImageHero(){
    const productHeroImage = document.querySelector('main .card-product .card-hero')
    const subImages = document.querySelectorAll('main .card-product .sub-images img')

    for(let image of subImages){
        image.addEventListener('click', () => {
            urlmage = image.getAttribute('src').replace('-thumbnail', '')
            productHeroImage.style.backgroundImage = `url(${urlmage})` 

            productHeroImageUrl = productHeroImage.style.backgroundImage.replace('url("', '').replace('thumbnail', '').replace('")', '')
            urlmageFormated = image.getAttribute('src').replace('-thumbnail', '')
            if(productHeroImageUrl === urlmageFormated){
                image.classList.toggle('active')
                
                // const containerSubImages = document.querySelector('main .card-product .sub-images')
                // for(let i = 0; i < containerSubImages.children.length; i++){
                //     if(containerSubImages.children[i].classList.contains('active')){
                //         console.log('encontrei')
                //         containerSubImages.children[i].classList.remove('active')
                //     }
                // }

            }else{
                image.classList.remove('active')
                console.log('diferente')
            }
        })
    }
}

function changeImageModal(){
    const subImagesModal = document.querySelectorAll('dialog .content-modal .sub-images-modal img')
    for(let imageModal of subImagesModal){
        imageModal.addEventListener('click', () => {
            const indexImage = imageModal.dataset.image
            swiper.slideTo(indexImage, 500, false)
        })
    }
}

const addProductCart = (event) => {
    event.preventDefault()

    if(cart.length > 0 ){
        alert('Produto já estar no carrinho')
        return
    }

    let nameProduct = document.querySelector('main .details-product .description-product .title-product').innerText
    let valueProduct = parseFloat(document.querySelector('main .details-product .price-product .current-price p').innerText.slice(1))
    let quantityProduct = parseInt(document.querySelector('main .details-product .cta-product .wrapper span').innerText)
    let totalValue = valueProduct * quantityProduct
    cart.unshift({
        idProduct: 1,
        nameProduct: nameProduct, 
        valueProduct: Number(valueProduct),
        quantityProduct: Number(quantityProduct),
        totalValue: totalValue
    })
    renderCart()
    showSumaryCart()
}

function deleteProductCart(event){
    let idProduct = event.target.offsetParent.children[1].children[0].id
    const foundProduct = cart.find(product => product.idProduct === idProduct)

    cart.pop(foundProduct)
    renderCart()
    closeSumaryCart()
}

function renderCart(){
    const itemCart = document.querySelector('header .sumary-cart .list-cart')

    if(cart.length > 0){
        itemCart.innerHTML = cart.map(({ idProduct, nameProduct, valueProduct, quantityProduct, totalValue }) => {
            return `
                <li class="item-cart" id="${idProduct}">
                    <img 
                    src="./images/image-product-1-thumbnail.jpg" 
                    alt="Image cart"
                    class="img-product-cart">

                    <div class="details-cart">
                    <p>${nameProduct}</p>
                    <div class="total-product">
                        <p class="value-cart">$${valueProduct}</p>
                        <p class="qty-cart">x ${quantityProduct}</p>
                        <p class="total-price"><strong> = $${totalValue}</strong></p>
                    </div>

                    </div>
                    <div class="delete-product">
                    <img src="./images/icon-delete.svg" alt="Delete Icon" onclick="deleteProductCart(event)">
                    </div>
                </li>
            `
        })
    }else{
        itemCart.innerHTML = `<p class="empty-message">Seu carrinho estar vazio</p>`
    }
}

iconMenuMobile.addEventListener('click', showMenu)
changeImageHero()
changeImageModal()
renderCart()

const swiper = new Swiper('.swiper', {
    keyboard: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
    crossFade: true
    },
  });