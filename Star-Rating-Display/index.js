const ratingInputVal = document.getElementById("ratingInputVal");
const rangeSlider = document.getElementById("rangeSlider");
// const stars = document.getElementsByClassName("star");
const stars = document.querySelectorAll(".star");
const starPartial = document.querySelectorAll(".star-partial");
const emojiCont = document.querySelector(".emoji-cont");

console.log(stars)
// ratingInputVal.textContent = rangeSlider.value;

// stars.forEach((star, index) => {
//     console.log('11', rangeSlider.value, index)
//     rangeSlider.value >= index ?
//         star.classList.add("change-color") :
//         star.classList.remove("change-color");
// })

let emojisObj = {
    1: "😢",
    2: "😕",
    3: "😶",
    4: "🙂",
    5: "🤪"
}

function changeStarColor(index) {
    stars.forEach((star, index2) => {
        if (index >= index2) {
            star.classList.add("change-color");
            emojiCont.textContent = emojisObj[index + 1];
        } else {
            star.classList.remove("change-color")
        }
    })
}


// On clicking on stars, change color
stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        changeStarColor(index);
    })
    star.addEventListener("mouseover", () => {
        starPartial.forEach((starPartial, index2) => {
            if (index >= index2) {
                starPartial.classList.add("change-color");
            }
        })
    })

    star.addEventListener("mouseleave", () => {
        starPartial.forEach((starPartial, index2) => {
            starPartial.classList.remove("change-color");
        })
    })
})

let starColor = {
    1: '#a28089',
    2: '#a2d2eb',
    3: '#ffa9b6',
    4: '#d0bdf9',
    5: '#d2b5f4'
}

const getRangeSliderVal = (e) => {
    console.log(e.target.value)
    ratingInputVal.textContent = e.target.value;
    stars.forEach((star, index) => {
        console.log('11', e.target.value, index)
        e.target.value > index ?
            star.classList.add("change-color") :
            star.classList.remove("change-color");
    })
}

rangeSlider.addEventListener("change", getRangeSliderVal);