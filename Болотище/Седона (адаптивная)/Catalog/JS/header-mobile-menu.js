let openMenu = document.querySelector('.header__menu-icon')
let headerMenu = document.querySelector('.header__list')
let closeMenu = document.querySelector('.header__list-close-btn')

openMenu.addEventListener('click', showMenu)

closeMenu.addEventListener('click', unshowMenu)

function showMenu () {
    headerMenu.classList.add('header__list-mobile')
}

function unshowMenu () {
    headerMenu.classList.remove('header__list-mobile')
}