let count = 1;
document.getElementById("counter").innerHTML = count;

document.getElementById("minus").addEventListener("click", function() {
    if(count > 1) {
        count = count - 1;
        document.getElementById("counter").innerHTML = count;
    }
})

document.getElementById("plus").addEventListener("click", function() {
        count = count + 1;
        document.getElementById("counter").innerHTML = count;
})

