const colorThemes = document.querySelectorAll('[ name="theme"]');
const storeTheme = function (theme) {
    localStorage.setItem("theme",theme);
};
colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click',() => {
        storeTheme(themeOption.id);
    });
});
const setTheme = function(theme) {
    document.documentElement.className = theme;
}

const retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme", theme);
}

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=>{
        if (link.style.animation)
        link.style.animation = ''
        else
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +0.55}s`;
    });
    burger.classList.toggle('toggle');
    });
}

const navLinkHover = () => {
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=>{
        if (link.style.animation)
        link.style.animation = ''
        else
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +0.55}s`;
    });
    burger.classList.toggle('toggle');
    });
}

const gradientEffect = () => {
    const name = document.querySelector('.name')

    name.addEventListener('hover', () => {

        name.classList.toggle('gradient-effect');
        
    });
}

navSlide();
gradientEffect();
