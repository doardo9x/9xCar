function filter(type) {
    let cards, i;
    let count = 0;
    cards = document.getElementsByClassName("card");
    buttons = document.getElementsByClassName("btn-filter");
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
        if (cards[i].classList.contains(type) || type === "all") {
            cards[i].style.display = 'block';
            count += 1;
        };
    };
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].id == `btn-${type}`) {
            buttons[i].classList.remove("btn-sm");
            buttons[i].classList.add("btn-md");
        }
        else {
            buttons[i].classList.remove("btn-md");
            buttons[i].classList.add("btn-sm");
        }
    };
    if (type === "all") {
        document.getElementById("btn-all").classList.remove ("btn-sm");
        document.getElementById("btn-all").classList.add("btn-md");
    };
    if (count == 0)
        document.getElementById("zeroCarro").classList.remove("d-none");
    else
        document.getElementById("zeroCarro").classList.add("d-none");
}


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
            rootMargin: '0px 0px -40%',
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