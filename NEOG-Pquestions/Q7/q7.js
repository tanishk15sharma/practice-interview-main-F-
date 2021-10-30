const inputText= document.querySelector("#textinput")
const fetchBtn = document.querySelector("#apibtn")
const outPut = document.querySelector("#output")

var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="


//fetchBtn.addEventListener("click",fetchAPI  )

function fetchAPI(text) {
    fetch(URL + text ) 
    .then(res=> res.json() )
    .then(data => {
        outPut.innerHTML = `${data.contents.translated} ${data.contents.text}`
        console.log(data);
    }  )
}

fetchBtn.addEventListener("click",function () {
    fetchAPI(inputText.value)
} )

