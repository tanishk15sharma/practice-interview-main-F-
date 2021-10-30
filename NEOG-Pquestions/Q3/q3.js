// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

const inputValue = document.querySelector("#input-value")
const h1Btn = document.querySelector("#btnh1")
const h2Btn = document.querySelector("#btnh2")
const h3Btn = document.querySelector("#btnh3")
const outputDisplay = document.querySelector("#useroutput")


inputValue.addEventListener("input", () => {
    displayOutput(inputValue.value)
})

function displayOutput(text) {
    outputDisplay.innerHTML = text
}
h1Btn.addEventListener("click", showDisplayh1)
h2Btn.addEventListener("click", showDisplayh2)
h3Btn.addEventListener("click", showDisplayh3)


function showDisplayh1() {
    displayOutput(`<h1>${inputValue.value}</h1>`)
}
function showDisplayh2() {
    displayOutput(`<h2>${inputValue.value}</h2>`)
}
function showDisplayh3() {
    displayOutput(`<h3>${inputValue.value}</h3>`)
}