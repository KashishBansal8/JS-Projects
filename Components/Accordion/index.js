
const sections = document.querySelectorAll('.section');
// const headingSection = document.querySelectorAll('.heading-section');
// const sectionContent = document.querySelectorAll('.section-content');

// for (i = 0; i < sections.length; i++) {
//     // Other accordions panels will remail open with this, not get automatically closed on opening another panel
//     sections[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//     })
// }


sections.forEach((section) => {
    const headingSection = section.querySelector('.heading-section');
    const sectionContent = section.querySelector('.section-content');
    const arrowIcon = section.querySelector('.arrow-icon');

    headingSection.addEventListener('click', () => {
        // check if any accordion panel open
        let isOpen = sectionContent.classList.contains('active');

        // Close all accordion panels if open
        sections.forEach((section) => {
            section.querySelector('.section-content').classList.remove('active');
            section.querySelector('.arrow-icon').classList.remove('rotate-arrow');
        })

        // if not open, only then add class active otherwise remove
        if (!isOpen) {
            sectionContent.classList.add('active');
            section.querySelector('.arrow-icon').classList.add('rotate-arrow');
        }
        else {
            sectionContent.classList.remove('active');
            section.querySelector('.arrow-icon').classList.remove('rotate-arrow');
        }
    })
})