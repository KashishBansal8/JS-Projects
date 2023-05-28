
let images = [
    'img1', 'img2', 'img3', 'img4'
]

let bgImgWrapper = document.getElementById('bgImgWrapper');
let dotSpan = document.getElementById('dotSpan');
let btn = document.querySelectorAll('.btn');
var counter = 0;
let dotI = document.createElement('i');
dotI.classList.add('fas', 'fa-dot-circle');
for (let i = 0; i < images.length; i++) {
    console.log('running', dotSpan.append(dotI))
    dotSpan.append(dotI);
}

btn.forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.classList.contains('left-btn')) {
            counter--;
            if (counter < 0) {
                counter = images.length - 1;
            }
            bgImgWrapper.style.backgroundImage = `url('./img/${images[counter]}.jpg')`;
        }
        else if (btn.classList.contains('right-btn')) {
            counter++;
            if (counter >= images.length) {
                counter = 0;
            }
            bgImgWrapper.style.backgroundImage = `url('./img/${images[counter]}.jpg')`;
        }
    })
});
