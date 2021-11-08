// create an input element to take user input and show it on screen and two buttons 'plus; and 'minus', and increase or decrease the font size of output by 2px based on click
const userInput = document.querySelector("#userinput")
const plusBtn = document.querySelector("#plusbtn")
const minusBtn = document.querySelector("#minusbtn")
const outputText = document.querySelector("#output")

userInput.addEventListener("input", () => {
    displayText(userInput.value)
})

plusBtn.addEventListener("click", plusFunction)
minusBtn.addEventListener("click", minusFunction)

function displayText(text) {
    outputText.innerHTML = text
}


var defaultSize = parseFloat(window.getComputedStyle(output).fontSize)

console.log(typeof(defaultSize));
function plusFunction() {
    defaultSize = defaultSize + 2
    outputText.style.fontSize = `${defaultSize}px`

}
function minusFunction() {
    defaultSize = defaultSize - 2
    outputText.style.fontSize = `${defaultSize}px`

}