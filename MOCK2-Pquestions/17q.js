// . Take an input from the user in text format. 
// Have 3 buttons with the names of "Log" ,"Warn" and "Error".
// If the user clicks on "Log" button, the text entered by the user will be shown in black color.
// Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively.

const inputTxt = document.querySelector("#inputtxt")
const logBtn = document.querySelector("#logbtn")
const warnBtn = document.querySelector("#warnbtn")
const errorBtn = document.querySelector("#errorbtn")
const output = document.querySelector("#output")

logBtn.addEventListener("click", logFunction);
warnBtn.addEventListener("click", () => {
    output.innerHTML = inputTxt.value
    output.style.color = "yellow"
})
errorBtn.addEventListener("click", function () {
    output.innerHTML = inputTxt.value
    output.style.color = "red"
})
function logFunction() {
    output.innerHTML = inputTxt.value
}