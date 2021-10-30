const userIdInput = document.querySelector("#userid")
const userPassword = document.querySelector("#userpassword")
const checkBtn = document.querySelector("#checkbtn")
const outputText = document.querySelector("#output")

checkBtn.addEventListener("click",checkIdandPassword)

function checkIdandPassword() {
    if(userIdInput.value == userPassword.value ) {
        outputText.innerText = "you cant use both as one ."

    }else{
        outputText.innerHTML = "sucessfull"
    }
}
