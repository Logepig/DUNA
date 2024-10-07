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


document.querySelectorAll(".button_status").forEach(el => {
    el.addEventListener("click", function() {
        document.getElementById("add-modal-block_of_blogers").classList.add("open")
    })
}
)

//5
document.getElementById("close-addings").addEventListener("click", function() {
    document.getElementById("add-modal-block_of_blogers").classList.remove("open")
})

//3

document.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        document.getElementById("add-modal-block_of_blogers").classList.remove("open")
    }
})

document.getElementById("commit-adding").addEventListener("click", function() {
    document.getElementById("add-modal-block_of_blogers").classList.remove("open")
})










