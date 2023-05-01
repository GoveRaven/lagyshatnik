let openWindowBtn = document.querySelectorAll('.open_modal-window')
let modalWindow = document.querySelector('.main__curtain')
let closeWindowBtn = document.querySelector('.mw__close-btn')

for (openBtn of openWindowBtn) {
    openBtn.addEventListener('click', showWindow)
}

closeWindowBtn.addEventListener('click', closeWindow)

function showWindow () {
    modalWindow.classList.remove('mw_hide')
}

function closeWindow () {
    modalWindow.classList.add('mw_hide')
}