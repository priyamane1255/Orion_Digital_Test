document.addEventListener('DOMContentLoaded', function () {
    const myCarouselElement = document.querySelector('#orianHeroCarousel');

    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 3000,
        ride: 'carousel',
        pause: 'hover' 
    });

    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    
    const observerOptions = {
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

   
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav'); 

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if (window.innerWidth < 992) { 
            const bsCollapse = new bootstrap.Collapse(menuToggle);
            bsCollapse.toggle();
        }
    });
});