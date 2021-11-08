const increaseBtn = document.querySelector("#increasebtn");
const decreaseBtn = document.querySelector("#decreasebtn");
const counterInput = document.querySelector("#counter-input");

increaseBtn.addEventListener("click", increaseCounter);
decreaseBtn.addEventListener("click", decreaseCounter);

decreaseBtn.disabled = false;

function increaseCounter() {
  let value = Number(counterInput.value) + 1;
    counterInput.value = value;
    decreaseBtn.disabled = false;

}

function decreaseCounter() {
    if (counterInput.value > 0) {
        let value = Number(counterInput.value) - 1;
        counterInput.value = value;
    } else {
        decreaseBtn.disabled = true;
    }
}