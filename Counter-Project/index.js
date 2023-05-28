let counterVal = document.getElementById('counterVal');
let lowerBtn = document.getElementById('lowerBtn');
let addBtn = document.getElementById('addBtn');
counterVal.innerText = 0;
console.log(counterVal.value)
lowerBtn.addEventListener('click', () => {
    counterVal.innerText = +counterVal.textContent - 1;
})

addBtn.addEventListener('click', () => {
    counterVal.innerText = +counterVal.textContent + 1;
})