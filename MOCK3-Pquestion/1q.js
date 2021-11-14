const clickBtn = document.querySelector("#click")
const output = document.querySelector("#output")
const inputTxt = document.querySelector("#inputtxt")
const inputOTP  = document.querySelector("#otptxt")
const checkOtpBtn = document.querySelector("#checkotp")



//console.log(output);

let url = `https://otpgenerator.ishanjirety.repl.co/get-otp?name=`

clickBtn.addEventListener("click", fetchOTP)
checkOtpBtn.addEventListener("click",checkOtp )

function fetchOTP() {
    fetch(url + inputTxt.value)
        .then(data => data.json())
        .then(password => {
            output.innerHTML = password.otp.split("-")[1]
            console.log(password.otp  )
             
        })
}

 function checkOtp () {
     if(inputOTP.value  === output.innerHTML  ){
         output.innerHTML = "successfull"
     }else {
        // console.log("fail");
        output.innerHTML = "unvaild"

     }
 }






