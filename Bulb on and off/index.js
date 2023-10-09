const bulb = document.getElementById("bulb");
const btn = document.getElementById("btn");
btn.addEventListener("click", Bulb);
function Bulb(){
    if(btn.textContent === "ON"){
        bulb.src ="https://i.postimg.cc/6QyTynzr/bulb-on.png";
        btn.textContent ="OFF";
    }else {
        bulb.src ="https://i.postimg.cc/KjK1wL3c/bulb-off.png";
        btn.textContent = "ON";
    }
}
