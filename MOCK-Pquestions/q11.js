// const input1 = document.querySelector("#input1")
// const input2 = document.querySelector("#input2")
// const addBtn = document.querySelector("#addbtn")
// const minusBtn = document.querySelector("#minusbtn")
// const intoBtn = document.querySelector("#intobtn")
// const divideBtn = document.querySelector("#dividebtn")
// const outPut = document.querySelector("#output")


const inputValue = document.querySelector("#inputvalue")
const valueBtn = document.querySelector("#value-btn")
const outputValue = document.querySelector("#outputValue")

valueBtn.addEventListener("click",hideNumber  )

function hideNumber() {
    let hideValue = inputValue.value;
    outputValue.innerHTML = hideValue.replace(/[0-9]/g,"")

}

// addBtn.disabled = true;
// minusBtn.disabled = true;
// intoBtn.disabled = true;
// divideBtn.disabled = true;

// function checkValue() {
//     if (input1.value > 0 && input2.value > 0) {
//         addBtn.disabled = false;
//         minusBtn.disabled = false;
//         intoBtn.disabled = false;
//         divideBtn.disabled = false;

//     } else {
//         addBtn.disabled = true;
//         minusBtn.disabled = true;
//         intoBtn.disabled = true;
//         divideBtn.disabled = true;

//     }
// }

// input1.addEventListener("input",
//     checkValue)
// input2.addEventListener("input",
//     checkValue)

// addBtn.addEventListener("click", addinput)
// minusBtn.addEventListener("click", minusinput)
// intoBtn.addEventListener("click", intoinput)
// divideBtn.addEventListener("click", divideinput)

// function addinput() {
//     sum = Number(input1.value) + Number(input2.value);
//     outPut.innerHTML = sum
// }

// function minusinput() {
//     sum = Number(input1.value) - Number(input2.value);
//     outPut.innerHTML = sum
// }

// function intoinput() {
//     sum = Number(input1.value) * Number(input2.value);
//     outPut.innerHTML = sum
// }

// function divideinput() {
//     sum = Number(input1.value) / Number(input2.value);
//     outPut.innerHTML = sum
// }