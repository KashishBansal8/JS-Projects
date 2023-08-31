let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let startBtnValue = startBtn.value;
hours.value = 0;
minutes.value = 0;
seconds.value = 0;
startBtn.value = "Start Timer";
const startTimer = () => {
    startBtn.value = "Start Timer" ? startBtn.value = "Pause" : startBtn.value = "Start Timer";
    
};

const resetTimer = () => {
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
}


startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

