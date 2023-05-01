const board = document.querySelector('#board')
const colors = ['#6be7e1', '#46ee62', '#f0db22', '#6391d6', '#ee6565', '#d9ee65', '#e265ee', '#e97c34']
const squaresNumber = 500;

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('sqr')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}