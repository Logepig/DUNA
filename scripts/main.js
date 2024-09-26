//6
document.getElementById("open-add").addEventListener("click", function() {
    document.getElementById("add-modal-block").classList.add("open")
})

//5


document.getElementById("close-add").addEventListener("click", function() {
    document.getElementById("add-modal-block").classList.remove("open")
})

//4

document.getElementById("commit-add").addEventListener("click", function() {
    document.getElementById("add-modal-block").classList.remove("open")
})

//3

window.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        document.getElementById("add-modal-block").classList.remove("open")
    }
})

//2
document.querySelector("modal_add .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true
})

