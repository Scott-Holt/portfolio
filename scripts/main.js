const hamIcon = document.getElementById('hamburger-icon');
const nav = document.getElementById('mobile-nav');
const closeIcon = document.querySelectorAll('.close-icon');

function openNav() {
    nav.style.left = '0%';
}


function closeNav(e) {
    nav.style.left = '-70%';
}

hamIcon.addEventListener('click', openNav);
closeIcon.forEach(item => item.addEventListener('click', closeNav));
console.log(window.innerWidth);