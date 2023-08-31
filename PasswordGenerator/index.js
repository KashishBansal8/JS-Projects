let passwordRangeSlider = document.getElementById('passwordRangeSlider');
let passwordLenVal = document.getElementById('passwordLenVal');
let findStrength = document.getElementById('findStrength');
let generatePasswordBtn = document.getElementById('generatePasswordBtn');
let generatePasswordInput = document.getElementById('generatePasswordInput');
let uppercaseCheck = document.getElementById('uppercaseCheck');
let lowercaseCheck = document.getElementById('lowercaseCheck');
let numberCheck = document.getElementById('numberCheck');
let symbolCheck = document.getElementById('symbolCheck');
let findStrengthCircle = document.getElementById('findStrengthCircle');

passwordLenVal.innerHTML = passwordRangeSlider.value;

function setPasswordLength() {
    passwordLenVal.innerHTML = this.value;
}

// Generate Random Alphabets, Numbers, Symbols
function getRandomLowerAlpha() {
    // String.fromCharCode() -- converts unicode value to characters
    // Here, we need random lowercase alphabet
    // Math.random() will give us any random value b/w 0-1
    // We have 26 alphabets so to get any random from 1 till 26 we will do
    // Math.random()*26 & to get rounded value instead of decimal do Math.floor(Math.random() *26)
    // Random number should be for lowercase so do +97 in this random value as now random value will start from 97 (lowercase unicode)
    // & goes till 26 alphabets
    // & then to change it to string use String.fromCharCode()

    // console.log(String.fromCharCode(97))
    // console.log(String.fromCharCode(Math.floor(Math.random() * 26 + 97)))
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpperAlpha() {
    // console.log(String.fromCharCode(Math.floor(Math.random() * 26 + 65)))
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
    // console.log(String.fromCharCode(Math.floor(Math.random() * 10 + 48)));
    // return Math.floor(Math.random() * 9);
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
    // Or instead of including these much symbols, add some specific symbols
    // console.log(String.fromCharCode(Math.floor(Math.random() * 15 + 33)) || String.fromCharCode(Math.floor(Math.random() * 7 + 58)));
    const symbols = '!@#$%^&*(){}[]=<>/|\,.';
    // Like this symbols[num], we will get that index value
    // console.log(symbols[1]);

    // So, to get Random symbol, do -
    // console.log(symbols[Math.floor(Math.random() * symbols.length)]);
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Store all random generator functions in object
let randomFunctions = {
    upper: getRandomUpperAlpha,
    lower: getRandomLowerAlpha,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

let strengthColor = {
    bad: "red",
    good: "yellow",
    veryGood: "green",
    default: "grey"
}

// Event Listener To generate password
generatePasswordBtn.addEventListener('click', () => {
    // Added + to change length value from string to number
    let length = +passwordRangeSlider.value;
    let hasUpper = uppercaseCheck.checked;
    let haslower = lowercaseCheck.checked;
    let hasNumber = numberCheck.checked;
    let hasSymbol = symbolCheck.checked;
    // console.log(typeof length)
    generatePasswordInput.value = generatePassword(hasUpper, haslower, hasNumber, hasSymbol, length);
});

// Function to generate password
function generatePassword(upper, lower, number, symbol, length) {
    // 1. Init pw var
    // 2. Filter out unchecked values
    // 3. Loop over length & call generator func over each type
    // 4. Return pw val

    let passwordVal = '';
    let typesCount = upper + lower + number + symbol;
    let checkedArr = [{ upper }, { lower }, { number }, { symbol }].filter((val) => {
        // console.log(Object.values(val)[0]);
        return Object.values(val)[0];
    });
    // console.log(checkedArr, typesCount)

    let strengthType = {
        0: "default",
        1: "bad",
        2: "bad",
        3: "good",
        4: "veryGood",
    }

    console.log('typescount', typesCount)
    console.log('va', strengthType[typesCount])

    let strengthTypeVal = strengthType[typesCount];
    findStrengthCircle.style.backgroundColor = strengthColor[strengthTypeVal];

    if (typesCount === 0) {
        passwordVal = '';
    }

    for (let i = 0; i < length; i += typesCount) {
        checkedArr.forEach(check => {
            let funcName = Object.keys(check)[0];
            // console.log('functname', funcName)
            passwordVal += randomFunctions[funcName]();
        })
    }

    passwordVal = passwordVal.slice(0, length);

    // console.log('pass', passwordVal)
    return passwordVal
}

// Event Listener To Set Password Length
passwordRangeSlider.addEventListener('change', setPasswordLength);

