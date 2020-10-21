// APPEAR EFFECT
let appearEffectSections = [".background-text", ".background-img", ".skills-inner", ".work-inner", ".contact-inner"];

function scrollAppear(className) {
    let section = document.querySelector(className)
    let sectionPosition = section.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (sectionPosition < screenPosition) {
        section.classList.add('appear-effect');
    } else {
        section.classList.remove('appear-effect');
    }
}

window.addEventListener('scroll', () => {
    appearEffectSections.forEach(section => {
        scrollAppear(section);
    })
});

// BACKGROUND CHANGE
function changeBgColor() {
    if (this.scrollY > this.innerHeight / 3) {
        document.querySelector('.index-body').classList.add('bg-active');
    } else {
        document.querySelector('.index-body').classList.remove('bg-active');

    }
}

window.addEventListener('scroll', changeBgColor);