let counterValue = document.getElementById('counterValue');
// let counterValueText = Number(counterValue.innerText);
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const selectNumber = document.getElementById('selectNumber');
const resetBtn = document.getElementById('resetBtn');
// counterValueText = 0;
let selectNumberVal;
selectNumber.addEventListener("change", function (e) {
    // console.log(e.target.min)
    // console.log(e.target.valueAsNumber)
    selectNumberVal = e.target.valueAsNumber;

    // if (selectNumberVal < 0) {
    //     selectNumber.value = 1;
    //     e.target.value = e.target.min;
    // }

    if (parseInt(selectNumberVal) < parseInt(e.target.min)) {
        selectNumber.value = 1;
    }

    // console.log(selectNumberVal, e.target.value)
    console.log('in change', parseInt(selectNumberVal) < parseInt(e.target.min))

});

selectNumber.addEventListener('keydown', function (e) {
    console.log(parseInt(selectNumberVal) < parseInt(e.target.min))
    if (parseInt(selectNumberVal) < parseInt(e.target.min)) {
        selectNumber.value = 1;
        // e.target.value = e.target.min;
    }
    selectNumberVal = e.target.value;

    console.log('select num in keyup', selectNumberVal, selectNumber.value)
})

function incrementCounterValue() {
    console.log('select val in inc', selectNumberVal)
    console.log(+(counterValue.innerText), (+selectNumberVal), +(counterValue.innerText) + (+selectNumberVal))
    counterValue.innerText = +(counterValue.innerText) + (+selectNumberVal);
}

function decrementCounterValue() {
    counterValue.innerText = +counterValue.innerText - selectNumberVal;
}

function resetCounterValue() {
    counterValue.innerText = 0;
}

increaseBtn.addEventListener('click', incrementCounterValue);
decreaseBtn.addEventListener('click', decrementCounterValue);
resetBtn.addEventListener('click', resetCounterValue);