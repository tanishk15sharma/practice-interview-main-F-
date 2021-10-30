// Here's an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message.


const callBtn = document.querySelector("#callapi-btn")
const outputText = document.querySelector("#output")

var URL = "https://unitube-server.herokuapp.com/playlists"

callBtn.addEventListener("click" , callApiWithBtn   )



function callApiWithBtn() {
    fetch(URL)
    .then(data => data.json() )
    .then(dataapi =>  console.log(dataapi.message )  )
    
    outputText.innerText = "user not logged in"
        
}

