 var cards = document.querySelectorAll(".card");
    var p = document.querySelector("p");
    var color = [];
    var random = Math.floor(Math.random() * 9) //0-<9
    var randomColor = [];
    // rgb(255,255,255)
    var randomColor1 = Math.floor(Math.random() * 256);
    var randomColor2 = Math.floor(Math.random() * 256);
    var randomColor3 = Math.floor(Math.random() * 256);
    var randomColor4 = Math.floor(Math.random() * 256);
    var randomColor5 = Math.floor(Math.random() * 256);
    var randomColor6 = Math.floor(Math.random() * 256);
    var randomColor7 = Math.floor(Math.random() * 256);
    var randomColor8 = Math.floor(Math.random() * 256);
    var randomColor9 = Math.floor(Math.random() * 256);
    var randomColor10 = Math.floor(Math.random() * 256);
    var randomColor11 = Math.floor(Math.random() * 256);
    var randomColor12 = Math.floor(Math.random() * 256);
    var randomColor13 = Math.floor(Math.random() * 256);
    var randomColor14 = Math.floor(Math.random() * 256);
    var randomColor15 = Math.floor(Math.random() * 256);
    var randomColor16 = Math.floor(Math.random() * 256);
    var randomColor17 = Math.floor(Math.random() * 256);
    var randomColor18 = Math.floor(Math.random() * 256);
    var randomColor19 = Math.floor(Math.random() * 256);
    var randomColor20 = Math.floor(Math.random() * 256);
    var randomColor21 = Math.floor(Math.random() * 256);
    var randomColor22 = Math.floor(Math.random() * 256);
    var randomColor23 = Math.floor(Math.random() * 256);
    var randomColor24 = Math.floor(Math.random() * 256);
    var randomColor25 = Math.floor(Math.random() * 256);
    var randomColor26 = Math.floor(Math.random() * 256);
    var randomColor27 = Math.floor(Math.random() * 256);
    randomColor.push(
        randomColor1, randomColor2, randomColor3, randomColor4, randomColor5, randomColor6, randomColor7, randomColor8, randomColor9, randomColor10, randomColor11, randomColor12, randomColor13, randomColor14, randomColor15, randomColor16, randomColor17, randomColor18, randomColor19, randomColor20, randomColor21, randomColor22, randomColor23, randomColor24, randomColor25, randomColor26, randomColor27
    );
    for (var i = 0; i < cards.length; i++) {
        // console.log("rgb("+randomColor[i]+","+randomColor[i+1]+","+randomColor[i+2])
        cards[i].style.backgroundColor = "rgb(" + randomColor[i] + "," + randomColor[i + 1] + "," + randomColor[i + 2]
        color.push(cards[i].style.backgroundColor)
    }
    p.textContent = color[random];
    p.style.backgroundColor = color[random];
    const checkanswer = (cardindex) => {
        // alert(cardindex);
        if (color[cardindex] == p.textContent) {
            alert("Yes")
        }
        else {
            alert("No")
        }
    }
