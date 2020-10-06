// The input field for size
const inputSize = document.querySelector("#input-size");
const showSize = document.querySelector("#show-size");
// Font select
const selectFont = document.querySelector("#select-font");
const showFont = document.querySelector("#show-font");
// Text color
const inputColor = document.querySelector("#input-color");
const showColor = document.querySelector("#show-color");
// Background color
const inputBgColor = document.querySelector("#input-bg-color");
const showBgColor = document.querySelector("#show-bg-color");
// Text box
const inputText = document.querySelector("#enter-text");
const display = document.querySelector("#display");
// Font weight
const selectWeight = document.querySelector("#select-weight");
const showWeight = document.querySelector("#show-weight");
// Font style
const selectStyle = document.querySelector("#select-style");
const showStyle = document.querySelector("#show-style");

inputSize.addEventListener("input", handleInput);
selectFont.addEventListener("input", handleInput);
inputColor.addEventListener("input", handleInput);
inputBgColor.addEventListener("input", handleInput);
inputText.addEventListener("input", handleInput);
selectWeight.addEventListener("input", handleInput);
selectStyle.addEventListener("input", handleInput);

function handleInput() {
  // Get all the current values
  const fontSize = inputSize.value;
  const fontType = selectFont.value;
  const textColor = inputColor.value;
  const bgColor = inputBgColor.value;
  const text = inputText.value;
  const fontWeight = selectWeight.value;
  const fontStyle = selectStyle.value;

  display.style["font-size"] = fontSize.concat("px");
  display.style["font-family"] = fontType;
  display.style.color = textColor;
  display.style["background-color"] = bgColor;
  display.style["font-weight"] = fontWeight;
  display.style["font-style"] = fontStyle;

  showSize.innerHTML = fontSize;
  showFont.innerHTML = fontType;
  showColor.innerHTML = textColor;
  showBgColor.innerHTML = bgColor;
  showWeight.innerHTML = fontWeight;
  showStyle.innerHTML = fontStyle;
  display.innerHTML = text;
}
