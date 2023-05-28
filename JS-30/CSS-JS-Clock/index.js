let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondDegree = ((seconds / 60) * 360) + 90;
    const minuteDegree = ((minutes / 60) * 360) + 90;
    const hourDegree = ((hours / 12) * 360) + 90;

    console.log('second minute hour', secondDegree, minuteDegree, hourDegree);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    [secondHand, minuteHand, hourHand].forEach(el => el.style.transition = (seconds === 90) ? 'none' : null);
}
setInterval(setDate, 1000);