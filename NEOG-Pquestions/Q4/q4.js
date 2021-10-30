// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.
const inputText = document.querySelector("#input-txt")
const redBtn = document.querySelector("#redbtn")
const greenBtn = document.querySelector("#greenbtn")
const blueBtn = document.querySelector("#bluebtn")
const outputTxt = document.querySelector("#outputtxt")

inputText.addEventListener("input", () => {
    outputDisplay(inputText.value)
})
redBtn.addEventListener("click",inputRed  )
greenBtn.addEventListener("click",inputGreen  )
blueBtn.addEventListener("click",inputBlue  )

function outputDisplay(e) {
    outputTxt.innerText = e
}
function inputRed() {
    inputText.style.color = "red"
}
function inputGreen() {
    inputText.style.color = "green"
}
function inputBlue() {
    inputText.style.color = "blue"
}
