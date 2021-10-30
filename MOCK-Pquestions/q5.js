// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor

let counterInput = document.querySelector("#counter")
const addBtn = document.querySelector("#addbtn")
const lessBtn = document.querySelector("#lessbtn")
const resetBtn = document.querySelector("#resetbtn")

addBtn.addEventListener("click",increaseInput  )
lessBtn.addEventListener("click",decreseInput )
resetBtn.addEventListener("click",resetInput)

var txt = 0

function increaseInput() {
    
    txt  = txt + 1 
    counterInput.innerText = txt 
}
function decreseInput() {
    txt = txt - 1
    counterInput.innerText = txt 
}
function resetInput() {
    txt = 0
    counterInput.innerText = txt
}