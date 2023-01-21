// red init
let red = 47;
const redText = document.createTextNode(red);
document.querySelector(".redOutput").appendChild(redText);
document.querySelector("#red").value = red;

// green init
let green = 79;
const greenText = document.createTextNode(green);
document.querySelector(".greenOutput").appendChild(greenText);
document.querySelector("#green").value = green;

// blue init
let blue = 79;
const blueText = document.createTextNode(blue);
document.querySelector(".blueOutput").appendChild(blueText);
document.querySelector("#blue").value = blue;

document.addEventListener("input", event => {
    switch (event.target.id) {
        case "red": red = event.target.value; break;
        case "green": green = event.target.value; break;
        case "blue": blue = event.target.value; break;
    }

    rgb = "rgb(" + red + "," + green + "," + blue + ")";
    document.querySelector("body").style.backgroundColor = rgb;
    
    document.querySelector(".redOutput").innerText = red;
    document.querySelector(".greenOutput").innerText = green;
    document.querySelector(".blueOutput").innerText = blue;
})