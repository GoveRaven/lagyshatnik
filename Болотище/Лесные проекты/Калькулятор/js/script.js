const buttons = document.querySelectorAll('.butt')
const output = document.querySelector('.output')

buttons.forEach(function(el) {
   el.addEventListener('click', function() {
    output.innerHTML += el.dataset.operation
   })
})

