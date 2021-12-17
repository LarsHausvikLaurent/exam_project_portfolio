

const detailContainer = document.querySelector(".inspiration");
const unique_title = document.querySelector(".unique_title");




const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);



const inspUrl = "https://bromelainofficial.com/wp-json/wc/store/products/" + id;

console.log(inspUrl);

async function fetchInsp() {

    try {
        const response = await fetch(inspUrl);
        const details = await response.json();

        console.log(details);

        createInsp(details);

        createTitle(details);


    }
    catch (error) {
        console.log(error);
    }



}

fetchInsp();


function createInsp(details) {
    detailContainer.innerHTML += `
    <div class="inspiration_wraper wraper"> 
    <div class="blog_name""><h1>${details.name}</h1></div>
    <div><img class="blog_image" src="${details.images[0].src}" alt="${details.name}"></div>
    <div><p>${details.description}</p></div>
    </a>
</div>`;
}


function createTitle(details) {


    unique_title.innerHTML = `

    <title> Veggi | ${details.name}</title>
    `;
}