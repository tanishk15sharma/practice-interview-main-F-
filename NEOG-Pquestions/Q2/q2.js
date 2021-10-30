// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

const inputText = document.querySelector("#inputtext")
const increaseBtn = document.querySelector("#increasebtn")
const decreaseBtn = document.querySelector("#decreasebtn")
const userInput = document.querySelector("#userinput")

// inputText.addEventListener("input", displayOutput )
// function displayOutput(text) {
//     userInput.textContent = text.target.value 
// } 
inputText.addEventListener("input", () => {
    displayOutput(inputText.value)
})

function displayOutput(e) {
    userInput.innerHTML = e
}
increaseBtn.addEventListener("click", increaseText)
decreaseBtn.addEventListener("click", decreaseText  )

var defaultSize = 16

function increaseText() {

    defaultSize = defaultSize + 2
    userInput.style.fontSize = `${defaultSize}px`
}
function decreaseText() {
    defaultSize = defaultSize - 2
    userInput.style.fontSize = `${defaultSize}px`
}