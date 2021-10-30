//'https://api.tvmaze.com/search/shows?q=all';

const apiBtn = document.querySelector("#api-btn")
const outputText = document.querySelector("#output")

apiBtn.addEventListener("click",callAPI  )

var URL = "https://api.tvmaze.com/search/shows?q=all"


var ans 

function callAPI() {
    fetch(URL)
    .then(convert => convert.json()  )
    .then(data => { data.map(i => 
        ans += i.show.name  )
        outputText.innerHTML = ans

    } )

}
