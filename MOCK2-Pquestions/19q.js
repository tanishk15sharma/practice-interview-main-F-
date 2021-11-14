const valuePrice = document.querySelector("#valueUSD")
const clickBtn = document.querySelector("#clickbtn")
const output = document.querySelector("#output")

let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

clickBtn.addEventListener("click", fetchFunction)

function fetchFunction() {
    fetch(url)
        .then(res => res.json())
        .then(data =>
            //console.log(data.usd.inr * valuePrice.value ) 

            (output.innerText = data.usd.inr.toFixed(2) * valuePrice.value + " AMOUNT IN INR")

        )
}