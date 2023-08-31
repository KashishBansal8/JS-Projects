let progressBar = document.getElementById('progressBar');

let colors = {
    0: '#a28089',
    25: '#a2d2eb',
    50: '#ffa9b6',
    75: '#d0bdf9',
    100: '#d2b5f4'
}

// Change color of progress bar based on how much percentage it's at
function changeColor(percentageVal) {
    let color;
    for (const key in colors) {
        // check for percentageVal greater than or equal to key, then assign that value to color
        if (percentageVal >= key) {
            color = colors[key];
        }
    }
    return color;
}

/*
 * for calculating percentage of how much we have scrolled
 * We need 2 things -> where our scroolbar is currently and how much content is there to scroll
 * 
 * clientHeight --> Height of the page
 * Scrollheight --> height of combined all the content which is scrollable on the page
 * ScrollTop --> Position of scrollbar right now
*/

function scrollPercentage() {
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;

    // To find scroll percentage

    let scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    progressBar.style.width = `${scrollPercentage}%`;

    // Given dynamic color to progressbar based on percentage
    progressBar.style.backgroundColor = changeColor(scrollPercentage);

    console.log(scrollPercentage)
}

document.addEventListener('scroll', scrollPercentage)