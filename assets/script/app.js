document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');

ScrollReveal().reveal('.clima', {delay: 500});

ScrollReveal().reveal('.frase', {delay: 2000});
ScrollReveal().reveal('.footer-message', {delay: 1000});
ScrollReveal().reveal('.footer-copyright', {delay: 1000});