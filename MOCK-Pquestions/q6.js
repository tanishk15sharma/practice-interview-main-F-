const inputText = document.querySelector("#inputtext")
const increaseBtn = document.querySelector("#increasebtn")
const decreaseBtn = document.querySelector("#decreasebtn")
const resetBtn = document.querySelector("#resetbtn")
const outputText = document.querySelector("#output")

increaseBtn.addEventListener("click",increseText  )
decreaseBtn.addEventListener("click",decreaseText  )
resetBtn.addEventListener("click",resetText  )


inputText.addEventListener("input" , () =>{
    displayOutput(inputText.value)

}  )

function displayOutput(text) {
    outputText.innerHTML = text
}
var defaultSize = 16
 
function increseText() {
    defaultSize = defaultSize + 2
    outputText.style.fontSize = `${defaultSize}px`
}
function decreaseText() {
    defaultSize = defaultSize - 2
    outputText.style.fontSize = `${defaultSize}px`
}
function resetText() {
    defaultSize = 16
    outputText.style.fontSize = `${defaultSize}px`
}



