const modaloverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const video_id = card.getAttribute("id")
        modaloverlay.classList.add('active')
        modaloverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${video_id}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modaloverlay.classList.remove("active")
    modaloverlay.querySelector("iframe").src = ""
})