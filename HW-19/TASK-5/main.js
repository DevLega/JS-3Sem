const fontSize = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSize.addEventListener("input", () => {
    const fontSizeValue = fontSize.value;
    console.log(fontSizeValue)
    text.style.fontSize = fontSizeValue + "px"
});