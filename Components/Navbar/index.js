const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".nav-search-btn-cont");
const browseLink = document.querySelector(".browse-link-cont");
const browseDropdownList = document.querySelector(".browse-dropdown-list");
const arrowIcon = document.querySelector(".arrow-icon");

hamburgerMenu.addEventListener('click', () => {
    console.log("click")
    navBar.classList.toggle("show");
    hamburgerMenu.classList.toggle("is-active");
})

browseLink.addEventListener("click", () => {
    browseDropdownList.classList.toggle("show");
})

browseLink.addEventListener("mouseover", () => {
    browseDropdownList.classList.toggle("show");
})