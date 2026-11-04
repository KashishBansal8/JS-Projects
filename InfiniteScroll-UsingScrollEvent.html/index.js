// const RANDOM_IMG_API = "https://source.unsplash.com/random";
// const RANDOM_IMG_API = " https://picsum.photos/200/300?random";
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

// function loadingImg() {
//     loadingCont.classList.add("show");
//     setTimeout(() => {
//         getRandomImages();
//         loadingCont.classList.remove("show");
//     }, 1000);
// }

window.addEventListener("scroll", (e) => {
    const { clientHeight, scrollHeight, scrollTop } = e.target.documentElement;

    if (clientHeight + scrollTop + 1 >= scrollHeight) {
        console.log(getRandomImages())
        getRandomImages();
    }
})

getRandomImages();