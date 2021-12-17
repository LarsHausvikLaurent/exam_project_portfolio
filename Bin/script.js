const recipeUrl = "https://bromelainofficial.com/wp-json/wp/v2/wprm_recipe/";
const recipeContainer = document.querySelector(".jacket-list")



async function getRecipes(url) {
    const response = await fetch(url);
    const products = await response.json();


    products.forEach(function (recipe) {

        console.log(recipe);

        recipeContainer.innerHTML += `  
        <a href="../recepie_details.html?id=${recipe.id}" class="products-jacket">
        <h2>${recipe.title.rendered}</h2>
        </a>
        `
    })

}

getRecipes(recipeUrl);