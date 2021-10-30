// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.
// Write a function which takes two objects and return the person with more power based on their name and power both.

const checkButton = document.querySelector("#check-btn")
const outputResult = document.querySelector("#output-result")

checkButton.addEventListener("click", finalResult)

var ramData = {
    name: "Ram",
    age: 25,
    power: 2500

}
var krishnaData = {
    name: "Krishna",
    age: 31,
    power: 2325
}

function finalResult() {
    var ramTotalPower = ramData.power + ramData.name.length *35 ;
    var krishnaTotalPower = krishnaData.power + krishnaData.name.length *35

    if (ramTotalPower > krishnaTotalPower) {
        outputResult.innerText = ramData.name
    } else {
        outputResult.innerText = krishnaData.name
    }
}