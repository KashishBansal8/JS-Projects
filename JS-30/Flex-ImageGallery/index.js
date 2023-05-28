
let panels = document.querySelectorAll('.panel');

function toggleClickOpen() {
    this.classList.toggle('open')
}

function toggleOpenActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

panels.forEach((panel) => {
    panel.addEventListener('click', toggleClickOpen);
    panel.addEventListener('transitionend', toggleOpenActive);
})