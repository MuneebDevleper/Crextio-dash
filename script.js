
let bar = document.querySelector ("#bar");
let menu = document.querySelector (" .nav-menu");

bar.addEventListener ('click', () => {
    menu.classList.toggle ('active');
});