const clickButton = document.querySelector("#clickbtn")
const outPut = document.querySelector("#output");
const counterBtn = document.querySelector("#counterbtn")

var url = "https://api.chucknorris.io/jokes/random";

//clickButton.addEventListener("click", fetchJoke);
let counter = 0;
 
clickButton.addEventListener("click",() =>{
    //let counter = 0;
    counter += 1;
    counterBtn.innerHTML = counter;
 fetchJoke();
}   )
function fetchJoke() {
    fetch(url)
        .then(response => response.json())
        .then(show => {
                outPut.innerHTML = show.value  ;
        }
        )
}