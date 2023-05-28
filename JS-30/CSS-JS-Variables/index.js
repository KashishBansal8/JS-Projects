let spacingRange = document.getElementById('spacingRange');
let blurRange = document.getElementById('blurRange');
let baseColorPicker = document.getElementById('baseColorPicker');
let img = document.getElementById('img');
let root = document.querySelector(':root');
console.log('root', root)

root.style.setProperty('--spacing', spacingRange.value + "px");
root.style.setProperty('--blur', blurRange.value + "px");
root.style.setProperty('--basecolor', baseColorPicker.value);

spacingRange.addEventListener('change', function () {
    root.style.setProperty('--spacing', this.value + "px");
})

blurRange.addEventListener('change', function () {
    root.style.setProperty('--blur', this.value + "px");
})

baseColorPicker.addEventListener('change', function () {
    console.log(this.value)
    root.style.setProperty('--basecolor', this.value);
})