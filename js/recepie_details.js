


const detailContainer = document.querySelector(".recipe_details_content");
const ingredientsContainer = document.querySelector(".recipe_details_ingredients")
const instructionsContainer = document.querySelector(".instructions")
const unique_title = document.querySelector(".unique_title");
const errorMessage_details = document.querySelector(".error-message");


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);



const url = "https://bromelainofficial.com/wp-json/wp/v2/wprm_recipe/" + id;


async function fetchRecipe() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        detailContainer.innerHTML = "";

        createIngredients(details);

        createInstructions(details)

        createHtml(details);

        createTitle(details);

    }
    catch (error) {
        console.log('error');
        errorMessage_details.innerHTML = displayError("Sorry, we could not upload the recipe");

    }

    finally {

    }
}

fetchRecipe();


function createHtml(details) {


    detailContainer.innerHTML = `
    <div class="recipe_details_style">

        <div class="recipe_details_h1">
            <h1>${details.title.rendered}</h1>
        </div>

        <div class="recipe_details_description">
            <h2>Description:</h2> ${details.content.rendered}</h2>
        </div>

        <div class="recipe_details_img">
            <img class="details_image" src="${details.recipe.image_url}" alt="${details.content.rendered}"></div>
        </div>

        <div class="recipe_details_info">
            <div class="time">
                <img class="svg_time" src="../images/icon_time.svg">
                <p>Prep-time: ${details.recipe.prep_time} min</p>
            </div>
            <div class="prep">
            <img class="svg_prep" src="../images/icon_cuttlery.svg">
            <p>Servings: ${details.recipe.servings}</p>
            </div>
        </div>

    </div>
    `;
}


function createIngredients(details) {
    const ingredients = details.recipe.ingredients[0].ingredients;

    ingredients.forEach(function (all) {

        console.log(all.name);

        ingredientsContainer.innerHTML += `

        <div class="ingredients_style">
            <div class="amount">
            <p>${all.amount}</P>
            </div>
            
            <div class="unit">
            <p>${all.unit}</p>
            </div>
            
            <div class="name">
            <p>${all.name}</p>
            </div>

        </div>`
    })
}




function createInstructions(details) {
    const instructions = details.recipe.instructions[0].instructions;

    console.log(instructions);

    instructions.forEach(function (instructions) {

        console.log(instructions.text);

        instructionsContainer.innerHTML += `
    <div>
    ${instructions.text}
    </div>
`
    })
}



function createTitle(details) {


    unique_title.innerHTML = `

    <title> Veggi | ${details.title.rendered}</title>
    `;
}