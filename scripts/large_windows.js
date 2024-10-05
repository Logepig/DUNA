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

document.querySelectorAll(".button_status1").forEach(el => {
    el.addEventListener("click", function() {
        document.getElementById("add-modal-block_of_blogers").classList.remove("open")
    })
}
)