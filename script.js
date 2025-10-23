const toggleButton = document.getElementById('menu-lateral');
const nav = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});


