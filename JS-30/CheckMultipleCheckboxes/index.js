let items = document.querySelectorAll('.item');
let checkboxs = document.querySelectorAll('.checkbox');
let checkedVal;

checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        console.log(checkbox.checked, checkbox.value);
        checkedVal = checkbox.value;
    });
    return checkedVal;
})

console.log('outside', checkedVal)

window.addEventListener('keydown', (event) => {
    if (event.shiftKey) {
        console.log('shift key', event)
    }
})