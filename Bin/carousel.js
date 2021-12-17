



const baseUrl = "https://bromelainofficial.com/wp-json/wc/store/products";
const apiContainer = document.querySelector(".api-content")


async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();

    /*     apiContainer.innerHTML +=
            `<li class="carousel__slide current-slide">  
            <img class="carousel__image" src="${products[0].images[0].src}" alt="#">
            </li>
            ` */

    products.forEach(function (product) {

        apiContainer.innerHTML += `

            <li class="carousel__slide">  
                <a href="#" class="carousel-content">   
                <div class="carousel__name"><h2>${product.name}</h2></div> 
                <div><img class="carousel__image" src="${product.images[0].src}" alt="#"></div>
                </a>
            </li>
        `
    })

    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');

    const slideWidth = slides[0].getBoundingClientRect().width;

    // arrange slides next to each other 

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    }

    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide')

    }

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;

        moveToSlide(track, currentSlide, prevSlide);
    })

    // Right button
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;

        moveToSlide(track, currentSlide, nextSlide);

    })

    console.log(slideWidth);


}

getProducts(baseUrl);




/*
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);

 */


// arrange the slides next to one another 
/* slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px'; */

/* const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')

}

// when I click left, move slides to left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.right;

    moveToSlide(track, currentSlide, prevSlide);

})



// When I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    moveToSlide(track, currentSlide, nextSlide);

})

// when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
    // what indicator was clicked on

    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');


}) */