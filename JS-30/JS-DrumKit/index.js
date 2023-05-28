let keys = document.querySelectorAll('.key');

window.addEventListener('keydown', playSound);

// To remove transition after time mentioned in css
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // If no audio present for the key then return
    if (!audio) {
        return
    }
    // setting current time to 0 so that audio can repeat from starting everytime when key pressed more than 1 time
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    // return taking any one event (generally the longest event)
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing')
}
