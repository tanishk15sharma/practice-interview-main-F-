//https://jsonplaceholder.typicode.com/posts;


const apiBtn = document.querySelector("#apibtn")
const textOutput = document.querySelector("#output")

var URL = "https://jsonplaceholder.typicode.com/posts"

apiBtn.addEventListener("click", callTitel)

var answer

function callTitel() {
  
  fetch(URL)
    .then(link => link.json())
    .then(data => {
        answer = data.map(data => {
            return data.title      
        
          }
        )
     //   console.log(data);
        textOutput.innerHTML = answer
      }
    )
}


