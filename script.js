const logo = document.querySelector('.nav-logo .logo');

logo.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)'; 
});

logo.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)'; 
});

const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', function() {
    searchInput.classList.toggle('show-search');
});

const backToTopButton = document.querySelector('.foot-panel1');

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
