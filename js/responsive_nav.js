const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const overflow = document.querySelector('body')


    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        console.log('Hello');

        /* if (burger.addEventListener === true) {
            console.log("hello");
        } */


        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.4}s`;
            }

        });

        //Burger Animation
        burger.classList.toggle('toggle');

        overflow.classList.toggle('overflow')


    });



}

navSlide();