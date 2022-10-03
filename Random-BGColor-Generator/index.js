let randomColorBtn = document.getElementById('randomColorBtn');
let randomColorSpan = document.getElementById('randomColorSpan');

const maxClrVal = 0xFFFFFF;
console.log(maxClrVal)

randomColorBtn.addEventListener('click', function () {
    // Generate random value
    let randomNum = Math.random() * maxClrVal;
    console.log(randomNum)

    // Converting floating point number to integer
    let randomIntNum = Math.floor(randomNum);

    // Changing random int number to hex value
    let randomClr = randomIntNum.toString(16);

    // Always have 6 characters
    randomClr = randomClr.padStart(6, 0);

    document.body.style.backgroundColor = '#' + randomClr;
    randomColorSpan.innerHTML = '#' + randomClr;
})



