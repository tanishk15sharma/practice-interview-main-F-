const userId = document.querySelector("#userid");
const passwordInput = document.querySelector("#password");
const checkBtn = document.querySelector("#checkbtn");
const outputTxt = document.querySelector("#output");


checkBtn.addEventListener("click", checkUsernameAndPass);

const userData = [{
        userName: "tanishk",
        password: "tanishk123"
    },
    {
        userName: "tanay",
        password: "tanay123"
    },
    {
        userName: "anamika",
        password: "anamika123"
    }
];

function checkUsernameAndPass() {
    if (userId.value == null || userId.value == "") {
        // console.log("fill username");
    return    alert("Please fill the userID")
    
    } else if (passwordInput.value == null || passwordInput.value == "") {
    return    alert("Please fill login password");
    
    }
    for (let i = 0; i < userData.length; i++) {
        if (userId.value === userData[i].userName && passwordInput.value === userData[i].password) {
            //  console.log("successfull login");
            return outputTxt.innerHTML = "successful login"
        }
    }
    outputTxt.innerHTML = "not valid"
}