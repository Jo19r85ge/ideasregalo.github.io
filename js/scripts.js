/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var contenido = document.querySelector('#contenido')

fetch('https://script.google.com/macros/s/AKfycbzqJm0uAtN19B7Wnqt2ecQGvjYjJtuYyjEs7F-fQ7w_pX7w7uTS/exec')

    .then(res => res.json())
    .then(data => {
        contenido.innerHTML = ''

            for(let valor of data){
                console.log(data)
                contenido.innerHTML += `
        


            <div class="portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="${valor.caratula}" alt="..." />
            </a>
            <div class="portfolio-caption">
                <div class="portfolio-caption-heading">${valor.cancion}</div>
                <div class="portfolio-caption-subheading text-muted">Illustration</div>
            </div>
        </div>

                `
            }
        }
    )


                //     <div class="col">
            //     <div class="card h-100">
            //       <img src="${valor.caratula}" class="card-img-top" alt="Skyscrapers"/>
            //       <div class="card-body">
            //         <h5 class="card-title">${valor.cancion}</h5>
            //         <p class="card-text">
            //           This is a wider card with supporting text below as a natural lead-in to
            //           additional content. This content is a little bit longer.
            //         </p>
            //       </div>
            //       <div class="card-footer">
            //         <small class="text-muted">Last updated 3 mins ago</small>
            //       </div>
            //     </div>
            //   </div>