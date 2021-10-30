//Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

const passwordInput = document.querySelector("#pass-input")
const checkBtn = document.querySelector("#check-btn")
const outputText = document.querySelector("#output")

checkBtn.addEventListener("click", checkPassword)
checkBtn.disabled = true ;

passwordInput.addEventListener("input", () => {
   var passValue = passwordInput.value.length;
    if (passValue > 10) {
        checkBtn.disabled = false
    }
})

function checkPassword() {
    var passValue = passwordInput.value.length;
    if (passValue > 10) {
        outputText.innerText = "success";
        // console.log( passValue )
    } else {
        outputText.innerText = "error"
    }
}