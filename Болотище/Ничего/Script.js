let square = document.querySelector('.square')
let control = document.querySelector('.control')
let value = control.value

function changeSquare(value) {
    console.log(value)
    square.style.background = `${value}`
    square.style.borderRadius = `${value}%`
}

control.addEventListener('keyup', () => {
    let setting = control.value
    changeSquare(setting)
})