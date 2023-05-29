const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('change');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('change');
    }
});