const inputTxt = document.querySelector("#inputtxt")
const checkBtn = document.querySelector("#checkbtn")
const output = document .querySelector("#output")


checkBtn.addEventListener("click",increaset  )

inputTxt.addEventListener("input",()=>{
    display(inputTxt.value)

}  )

function display(text) {
    output.innerHTML = text
}

var defalutvalue = 16

function increaset() {
    defalutvalue += 2
    output.innerHTML = inputTxt.value
    
    output.style.fontSize =  `${defalutvalue}px`
}