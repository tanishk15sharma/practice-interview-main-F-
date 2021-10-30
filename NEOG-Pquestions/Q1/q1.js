// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice. Your time starts now.

const inputValue1 = document.querySelector("#inputvalue1")
const inputValue2 = document.querySelector("#inputvalue2")
const addBtn = document.querySelector("#addbtn")
const minusBtn = document.querySelector("#minusbtn")
const intoBtn = document.querySelector("#intobtn")
const divideBtn = document.querySelector("#dividebtn")
const outputText = document.querySelector("#output")

addBtn.addEventListener("click",addValues )
minusBtn.addEventListener("click",minusValues )
intoBtn.addEventListener("click",intoValues) 
divideBtn.addEventListener("click",function divideFunction  ()   {
   outputText.innerText = Number(inputValue1.value) / Number(inputValue2.value)
})

function addValues() {   
    var value1 = Number(inputValue1.value) 
    var value2 = Number(inputValue2.value)
    sum = value1 + value2 ;
    outputText.innerText = sum
}
function minusValues() {
    outputText.innerText = Number(inputValue1.value) - Number(inputValue2.value)
}
function intoValues() {
    outputText.innerText = Number(inputValue1.value) * Number(inputValue2.value)
}




