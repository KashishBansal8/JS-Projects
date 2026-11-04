const imgUrls = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg"
]

const img = document.querySelector('.img');
const leftArrowBtn = document.querySelector('.left-arrow-btn');
const rightArrowBtn = document.querySelector('.right-arrow-btn');
const slickDotsCont = document.querySelector('.slick-dots-cont');

let randomIndex = Math.floor(Math.random() * imgUrls.length);
img.src = imgUrls[randomIndex];

imgUrls.map(() => {
    let span = document.createElement('span');
    slickDotsCont.append(span);
    span.classList.add("dot");
})

let dotsSpan = document.querySelectorAll('.dot');
dotsSpan[randomIndex].classList.add('active');

(function showImages() {
    rightArrowBtn.addEventListener('click', () => {
        dotsSpan[randomIndex].classList.remove('active');
        randomIndex = randomIndex + 1;

        if (randomIndex > imgUrls.length - 1) {
            randomIndex = 0;
        }
        img.src = imgUrls[randomIndex];
        dotsSpan[randomIndex].classList.add('active');
    })

    leftArrowBtn.addEventListener('click', () => {
        dotsSpan[randomIndex].classList.remove('active');
        randomIndex = randomIndex - 1;

        if (randomIndex < 0) {
            randomIndex = imgUrls.length - 1;
        }
        img.src = imgUrls[randomIndex];
        dotsSpan[randomIndex].classList.add('active');
    })

    dotsSpan.forEach((dotSpan, index) => {
        dotSpan.addEventListener('click', () => {
            // Remove active class from dotspans firstly
            dotsSpan.forEach((dotSpan) => {
                dotSpan.classList.remove('active')
            })

            img.src = imgUrls[index];
            randomIndex = index;
            dotSpan.classList.add('active');
        })
    })
})();

// showImages();


