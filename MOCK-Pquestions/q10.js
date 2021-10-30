const inputUser = document.querySelector("#userinput")
const checkBtn = document.querySelector("#checkinput")
const outputText = document.querySelector("#output")

checkBtn.addEventListener("click", outputCharacter)

function outputCharacter() {
    //   outputText.innerHTML = inputUser.length
    var inputword = inputUser.value.split(" ")
    var txt = ""
    
    for (let i = 0; i < inputword.length; i++)
    
    {
        if (inputword[i].length > txt.length) {
            txt = inputword[i] 
            outputText.innerHTML = txt ;
        }
    }
    console.log(inputword);
}