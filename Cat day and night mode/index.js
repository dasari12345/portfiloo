const cat = document.getElementById("cat");
const btn = document.getElementById("btn");
btn.addEventListener("click", Cat);
function Cat() {
    if (btn.textContent == "Click Me") {
        cat.src = "cateyes.jpeg";
        btn.textContent = "Close Me";
    } else {
        cat.src = "catfull.jpeg";
        btn.textContent = "Click Me";
    }
}
