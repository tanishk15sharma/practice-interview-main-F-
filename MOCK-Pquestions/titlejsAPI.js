const clickBtn = document.querySelector("#clickbtn");
const outPut = document.querySelector("#output");


var url = "https://jsonplaceholder.typicode.com/todos";

clickBtn.addEventListener("click",fetchFunction);

var txt 
function fetchFunction() {
    fetch(url)
    .then(response => response.json()  )
    .then(data => {  data.map(show => 
       txt += show.title
      // console.log(txt);
     )
     console.log(txt);
}
      )

}