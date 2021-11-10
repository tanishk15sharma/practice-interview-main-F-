const fetchBtn = document.querySelector("#fetchbtn");
const outPut = document.querySelector("#output")

let url = "https://jsonplaceholder.typicode.com/users";

fetchBtn.addEventListener("click", fetchUserAndCity)

let answer = ""

function fetchUserAndCity() {
    fetch(url)
        .then(convert => convert.json())
        .then(data => {
            data.forEach(item =>   { answer +=item.username + " " + item.address.city;
                    outPut.innerText = answer;
        }

            )
        })
}