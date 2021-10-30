const inputText = document.querySelector("#input-txt")
const redBtn = document.querySelector("#redbtn")
const greenBtn = document.querySelector("#greenbtn")
const blueBtn = document.querySelector("#bluebtn")

redBtn.addEventListener("click",inputRed  )
greenBtn.addEventListener("click",inputGreen  )
blueBtn.addEventListener("click",inputBlue  )

function inputRed() {
    inputText.style.color = "red"
}
function inputGreen() {
    inputText.style.color= "green"
}
function inputBlue() {
    inputText.style.color= "blue"
}