const mainCont = document.getElementById('mainCont');
const toggleThemeBtn = document.getElementById('toggleTheme');

toggleThemeBtn.addEventListener('click', () => {
    // Using Normal css
    // mainCont.classList.toggle('dark-theme');

    // Changing Button text Based on Theme
    if (toggleThemeBtn.textContent === "Light Theme") {
        toggleThemeBtn.textContent = "Dark theme";
    }
    else {
        toggleThemeBtn.textContent = "Light Theme";
    }
    // using custom variables in css

    document.body.classList.toggle('dark-theme');
})