// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success.

const inputText = document.querySelector("#pass-input")
const passwordBtn = document.querySelector("#pass-btn")
const outputText = document.querySelector("#output")

passwordBtn.addEventListener("click", checkPassword)

passwordBtn.disabled = true;

inputText.addEventListener("input", () => {
    passwordBtn.disabled = false;


})

function checkPassword() {
    if (inputText.value.length > 10) {
        outputText.innerText = "success"

    } else {
        outputText.innerText = "error"
    }
}