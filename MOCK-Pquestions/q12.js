const apiBtn = document.querySelector("#apibtn")
const output = document.querySelector("#output")

var URL= "https://mystery-api.kushanksriraj.repl.co/get"

apiBtn.addEventListener("click" ,checkFetch )


function checkFetch() {
    fetch(URL)
    
  //  console.log(response) 
  .then(response =>{
    if(response.status === 404 ){
        output.innerHTML = "page not found"
    }else if(response.status ===401 ){
        output.innerHTML = "you are not logged in "
    }else if (response.status ===200 ){
        output.innerHTML = "API is working "
    }
  }  )    
}