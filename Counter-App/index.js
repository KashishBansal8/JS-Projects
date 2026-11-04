
document.addEventListener('DOMContentLoaded', () => {
    const counterVal = document.getElementById("counterVal");
    const incrementBtn = document.getElementById("incrementBtn")
    const decrementBtn = document.getElementById("decrementBtn")
    const resetBtn = document.getElementById("resetBtn")
    const counterRangeSelector = document.getElementById("counterRangeSelector");

    const updateCounter = (operation) => {
        const currentVal = parseInt(counterVal.textContent, 10);
        const selectRangeValue = parseInt(counterRangeSelector.value, 10) || 1;

        if (operation === "increment") {
            counterVal.innerText = currentVal + selectRangeValue;
        }
        else if (operation === 'decrement') {
            counterVal.innerHTML = currentVal - selectRangeValue;
        }
    }

    const resetCounter = () => {
        counterRangeSelector.value = 1;
        counterVal.innerHTML = 0;
    }

    incrementBtn.addEventListener("click", () => updateCounter("increment"))
    decrementBtn.addEventListener("click", () => updateCounter("decrement"))
    resetBtn.addEventListener('click', resetCounter)

    counterRangeSelector.addEventListener("input", (e) => {
        const selectValue = parseInt(counterRangeSelector.value, 10);
        if (selectValue < parseInt(e.target.min, 10)) {
            counterRangeSelector.value = e.target.min;
        }
        else if (selectValue > parseInt(e.target.max, 10)) {
            counterRangeSelector.value = e.target.max;
        }
    })
})


// for (let i = 1; i <= 10; i++) {
//     let option = document.createElement('option');
//     option.value = i;
//     option.innerHTML = i;
//     selectCounterOption.appendChild(option)
// }

// incrementBtn.addEventListener('click', () => {
//     counterVal.innerText = +counterVal.textContent + +selectCounterOption.value
// })

// decrementBtn.addEventListener('click', () => {
//     counterVal.innerText = +counterVal.textContent - +selectCounterOption.value
// })

// resetBtn.addEventListener('click', () => {
//     counterVal.innerText = 0;
// })



