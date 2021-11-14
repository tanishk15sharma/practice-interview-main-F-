// #### create a web app with a name input, checkbox for age 18+ and a submit button. when clicked on the submit button, if the checkbox is checked, then display 'you are  eligible' in green color else display 'you are eligible' in red color.

const nameInput = document.querySelector("#nameinput")
const checkAge = document.querySelector("#checkage")
const checkBtn = document.querySelector("#checkbtn")
const output = document.querySelector("#output")

checkBtn.addEventListener("click",checkAgeFunction  )

function checkAgeFunction() {
    if(checkAge.checked === false  ){
        output.innerHTML = "you are not eligible"
        output.style.color = "red";
    }else {
        output.innerHTML = "you are eligible"
        output.style.color = "green";
       // console.log("no")
    }
}

