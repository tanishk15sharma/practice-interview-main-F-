// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

const checkAgeBtn = document.querySelector("#check-btn")
const outputText = document.querySelector("#output")

var ramData = {
    name: "Ram" ,
    age: 25 ,
    yuga: "Treta"

}

var KrishnaData = {
    name: "krishna",
    age: 31 ,
    yuga: "Dwapar"
}

checkAgeBtn.addEventListener("click" , checkAgeFunction )

function checkAgeFunction() {
    if(ramData.age > KrishnaData.age ){
        outputText.innerText = ramData.name
    }else{
        outputText.innerText = KrishnaData.name
    }

}