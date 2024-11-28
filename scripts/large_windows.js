

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

document.getElementById("add-application").addEventListener("click", function() {
    document.getElementById("add-modal-block_of_blogers").classList.add("open")
})

document.getElementById("commit-adding").addEventListener("click", function() {
    document.getElementById("add-modal-block_of_blogers").classList.remove("open")
})



function open_error() {
    document.querySelectorAll(".error").forEach(el => {
        el.classList.add("open")
    });

}

document.querySelectorAll(".esc3").forEach(el => {
    el.addEventListener("click", function() {
        document.querySelectorAll(".error").forEach(el => {
            el.classList.remove("open")
        });
    })
})
