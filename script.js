const container = document.querySelector('.container')
const slides = document.querySelectorAll('.slide')

container.addEventListener('click', event => {
    if (!event.target.classList.contains('slide')) return
    clearActiveClasses()
    event.target.classList.add('active')
})

function clearActiveClasses() {
    for (let slide of slides) {
        if (slide.classList.contains('active')) slide.classList.remove('active')
    }
}