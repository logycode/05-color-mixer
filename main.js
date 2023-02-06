const colorNames = ["r", "g", "b"];
const initialColors = [47, 79, 79];
const state = {
  rgb: {},
  hex: "",
};

async function callApi() {
  await fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      state.rgb = data.rgb;
      state.hex = data.color;
    });
}

function render(trigger = "") {
  colorNames.forEach((colorName) => {
    document.querySelector("#" + colorName).value = state.rgb[colorName];
    document.querySelector("." + colorName).innerText = state.rgb[colorName];
  });

  document.body.style.backgroundColor =
    "rgb(" + Object.values(state.rgb).join(",") + ")";
}

/**
 * *  Event Listeners *
 */

document.addEventListener("DOMContentLoaded", () => {
  colorNames.forEach((colorName, index) => {
    state.rgb[colorName] = initialColors[index];
  });
  render();
});
document.addEventListener("input", (event) => {
  state.rgb[event.target.id] = event.target.value;

  render();
});
document.querySelector("button").addEventListener("click", (event) => {
  callApi();
  render();
  event.target.blur();
});
