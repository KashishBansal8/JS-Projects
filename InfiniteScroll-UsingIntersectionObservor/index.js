const RANDOM_IMG_API = "https://dog.ceo/api/breeds/image/random";

const imgCont = document.querySelector(".images-cont");
const loadingCont = document.querySelector(".loading-cont");

async function getRandomImages() {
    for (let i = 0; i < 10; i++) {
        const imgData = await fetch(RANDOM_IMG_API);
        const jsonData = await imgData.json();
        const img = document.createElement("img");
        img.src = jsonData ? jsonData.message : "Loading Images";
        img.alt = "Random Dog";
        imgCont.appendChild(img);
    }
}

getRandomImages();

let callbackFn = (entries) => {
    console.log(entries, entries.target);
    entries.forEach(entry => {
        console.log(entry.target.clientHeight, entry.target.scrollHeight, entry.target.scrollTop)
        if (entry.target.clientHeight + entry.target.scrollTop >= entry.target.scrollHeight) {
            getRandomImages();
        }
    });
}

let options = {
    root: null,
    threshhold: 0.5,
    rootMargin: '0px'
}
const observor = new IntersectionObserver(callbackFn, options);

observor.observe(imgCont);