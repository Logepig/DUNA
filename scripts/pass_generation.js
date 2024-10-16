function gen_password(len){
    len =  Math.floor(16 + Math.random() * (25 - 16 + 1));
    len = len * (-1);
    return Math.random().toString(36).slice(len);
}
let pass = "1";

document.getElementById("generation").addEventListener("click", function() {
    pass = gen_password().slice(2);
    document.getElementById("for_pass").innerHTML = pass;
})

document.getElementById("copy").addEventListener("click", function() {
    document.getElementById("mess").classList.add("open");
    navigator.clipboard.writeText(document.getElementById("for_pass").innerText);
    setTimeout(() => {
        document.getElementById("mess").classList.remove("open");
    }, 5 * 1000);
});
