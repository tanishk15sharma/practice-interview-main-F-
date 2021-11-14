// <!-- Question:

// Write an app that has a text field and password field, and a button. Onclick, it should internally compare the text and password to a predefined object 
// { 
//    username: customusername, 
//    password: custompass 
// }
// and check if both username and password match, and show success/fail message accordingly -->

const userName = document.querySelector("#username")
const passName = document.querySelector("#passname")
const clickBtn = document.querySelector("#clickbtn")
const output = document.querySelector("#output")

clickBtn.addEventListener("click",checkFields )

let data = {
    userName: "customusername" ,
    password: "custompass"
}

function checkFields() {
    if(userName.value === data.userName && passName.value === data.password){
        output.innerHTML = "success"
    }else {
        output.innerHTML = "fail"
    }
}
