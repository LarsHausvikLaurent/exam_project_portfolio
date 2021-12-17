const baseUrl = "https://bromelainofficial.com/wp-json/wc/store/products?per_page=5";
const apiContainer = document.querySelector(".api-load_more")


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

            <div class="wraper">  
                <a href="#" class="content-load_more">   
                <div class="load_more_name"><h2>${product.name}</h2></div> 
                <div><img class="load_more_image" src="${product.images[0].src}" alt="#"></div>
                </a>
            </div>
        `
    })


    var wraper = document.querySelectorAll('.wraper');
    const btn = document.querySelector('.btn_style');
    var currentImg = 2
    btn.addEventListener('click', function () {


        for (let i = currentImg; i < currentImg + 2; i++) {
            if (wraper[i]) {
                wraper[i].style.display = 'block';
            }
        }

        currentImg += 2;

    })




}

getProducts(baseUrl);


