const inputCounter = document.querySelector("#inputcounter")
const increaseBtn = document.querySelector("#btnup")
const decreaseBtn = document.querySelector("#btndown")

increaseBtn.addEventListener("click" ,increseInput )
decreaseBtn.addEventListener("click" ,decreaseInput )

decreaseBtn.disabled = false
var counter = 0

function increseInput() {    
   // var counter = ""
    counter = counter + 1 
    inputCounter.innerText = counter   
    decreaseBtn.disabled = false
    
     
}
function decreaseInput() {
    counter = counter - 1
    inputCounter.innerText = counter
    if(counter ==0 ){
        decreaseBtn.disabled = true
    } 
}
