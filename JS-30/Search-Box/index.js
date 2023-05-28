const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let searchBox = document.getElementById('searchBox');
let countryInfo = document.querySelector('.country-info');
let cities = [];

let fetchResult = fetch(endpoint).then((data) => {
    return data.json();
}).then((jsonData) => {
    cities.push(...jsonData);
})

function findMatches(wordToMatch, cities) {
    // To find if city or state matches to what was searched
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function separatedWithCommas(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayResult() {
    let matchResult = findMatches(this.value, cities);
    let html = matchResult.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="highlight">${this.value}</span>`);
        return `
            <li>
                <span>${cityName}, ${stateName}</span>
                <span class="population">${separatedWithCommas(place.population)}</span>
            </li>
        `
    }).join(' ');
    countryInfo.innerHTML = html;
};

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

searchBox.addEventListener('keyup', displayResult);
// searchBox.addEventListener('keyup', debounce(displayResult));