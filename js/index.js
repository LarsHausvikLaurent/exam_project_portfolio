const recipeUrl = "https://bromelainofficial.com/wp-json/wp/v2/wprm_recipe?per_page=3";
const topRecipesContainer = document.querySelector(".top-recipes_api")
const errorMessage = document.querySelector(".error-message");
const errorMessage_carousel = document.querySelector(".error-message_carousel");
const errorMessage_hide = document.querySelector(".carousel");


async function getRecipes(url) {

    try {
        const response = await fetch(url);
        const topRecipes = await response.json();


        topRecipes.forEach(function (recipe) {

            console.log(recipe);

            topRecipesContainer.innerHTML += `  
            <a href="../recepie_details.html?id=${recipe.id}" class="top-recipes_style">
            <img class="width_img" src="${recipe.recipe.image_url}" alt="${recipe.title.rendered}"></div>
            <h3>${recipe.title.rendered}</h3>
            <p>${recipe.recipe.notes}</p>
            </a>
            `
        })
    }

    catch (error) {
        console.log("The API call for new recipes did not get through");
        errorMessage.innerHTML = displayError("Sorry, we could not upload new recipes");
    }

    finally {
    }


}

getRecipes(recipeUrl);



const carouselRecipeUrl = "https://bromelainofficial.com/wp-json/wp/v2/wprm_recipe?per_page=6";
const carouselRecipesContainer = document.querySelector(".carousel_recipes_api")


async function getCarouselRecipes(url) {
    const response = await fetch(url);
    const carouselRecipes = await response.json();

    try {
        carouselRecipes.forEach(function (carouselRecipe) {

            carouselRecipesContainer.innerHTML += '';

            carouselRecipesContainer.innerHTML += `
    
                <li class="carousel_slide">  
                    <a href="../recepie_details.html?id=${carouselRecipe.id}" class="carousel_content_styling">   
                    <div><h3>${carouselRecipe.title.rendered}</h3></div> 
                    <div><img src="${carouselRecipe.recipe.image_url}" alt="${carouselRecipe.title.rendered}"></div>
                    </a>
                </li>
            `
        })

        const track = document.querySelector('.carousel_track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel_button-right');
        const prevButton = document.querySelector('.carousel_button-left');

        const slideWidth = slides[0].getBoundingClientRect().width;


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

        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;

            moveToSlide(track, currentSlide, nextSlide);

        })

        console.log(slideWidth);


    }

    catch (error) {
        console.log("The API call for the carousel did not get through");
        errorMessage_carousel.innerHTML = displayErrorCarousel("Sorry, we could not upload hot tips");
        errorMessage_hide.classList.add('error_hide')


    }

    finally {
    }



}

getCarouselRecipes(carouselRecipeUrl);


