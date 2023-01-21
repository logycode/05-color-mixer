const colorNames = ["red", "green", "blue"];
const initialColors = [47,79,79];

function init(colorArray) {
    colorNames.forEach((colorName, index) => {
        const text = document.createTextNode(colorArray[index]);
        document.querySelector("."+colorName).appendChild(text);
        document.querySelector("#"+colorName).value = colorArray[index]; 
    })
}

init(initialColors)

document.addEventListener("input", event => {
    const value = event.target.value;
    const reference = event.target.id;
    let rgb = "rgb("

    document.querySelector("."+reference).innerText = value;
    colorNames.forEach((colorName,index) => {
        const color = document.querySelector("#"+colorName).value;
        rgb += color
        if(index < 2) {
            rgb += ","
        }
    })
    rgb += ")";
    document.querySelector("body").style.backgroundColor = rgb;
})