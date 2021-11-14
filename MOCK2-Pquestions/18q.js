const inputTxt = document.querySelector("#inputtxt")
const clickBtn = document.querySelector("#clickbtn")
const output = document.querySelector("#output")

clickBtn.addEventListener("click",reverseText  )
function reverseText() {
    let txt = inputTxt.value
    let str = ""; 
    for(let i= txt.length-1 ; i>=0 ; i--){
       // output.innerText += txt[i] 
       str += txt[i]    }
    output.innerHTML = str
}
var arr = ["a","s","f","g","t"]
console.log(arr[1]);




  







