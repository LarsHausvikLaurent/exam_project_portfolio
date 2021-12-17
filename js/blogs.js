const allRecipesUrl = "https://bromelainofficial.com/wp-json/wp/v2/wprm_recipe";
const apiContainer = document.querySelector(".api-load_more")


async function getAllRecipes(url) {
    const response = await fetch(url);
    const allRecipes = await response.json();

    console.log(allRecipes);

    allRecipes.forEach(function (recipe) {

        apiContainer.innerHTML += `

            <div class="wraper">  
                <a href="../recepie_details.html?id=${recipe.id}" class="blog_content">   
                <div><img class="blog_image" src="${recipe.recipe.image_url}" alt="${recipe.title.rendered}"></div>
                <div class="blog_name"><h2>${recipe.title.rendered}</h2></div> 
                <p class="blog_note">${recipe.recipe.notes}</p>
            </div>
        `
    })


    var wraper = document.querySelectorAll('.wraper');
    const btn = document.querySelector('.btn_style');
    var currentImg = 3
    btn.addEventListener('click', function () {


        for (let i = currentImg; i < currentImg + 3; i++) {
            if (wraper[i]) {
                wraper[i].style.display = 'block';
            }
        }

        currentImg += 3;

    })




}

getAllRecipes(allRecipesUrl);





const baseUrl = "https://bromelainofficial.com/wp-json/wc/store/products?per_page=2";


async function getInspiration(url) {
    const response = await fetch(url);
    const products = await response.json();


    products.forEach(function (inspiration) {

        apiContainer.innerHTML += `

        <div class="wraper">  
            <a href="../inspiration_details.html?id=${inspiration.id}" class="blog_content">
            <div><img class="blog_image" src="${inspiration.images[0].src}" alt="${inspiration.name}"></div>
            <div class="blog_name""><h2>${inspiration.name}</h2></div>
            </a>
        </div>
        `
    })

}

getInspiration(baseUrl);
