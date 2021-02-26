// APPEAR EFFECT
let appearEffectSections = [".background-text", ".background-img", ".skills-inner", ".work-inner", ".contact-inner", ".intro"];

function scrollAppear(className) {
    let section = document.querySelector(className)
    let sectionPosition = section.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.1;
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

// CONTACT HOVER
let emailContainer = document.querySelector('.email-container');
let email = document.querySelector('.email');
let linkedinContainer = document.querySelector('.linkedin-container');
let linkedin = document.querySelector('.linkedin');
let githubContainer = document.querySelector('.github-container');
let github = document.querySelector('.github');
let twitterContainer = document.querySelector('.twitter-container');
let twitter = document.querySelector('.twitter');

function changeContactHome(container, image, name) {
    container.addEventListener('mouseenter', function () {
        image.src = `media/white-${name}.svg`;
    })
    container.addEventListener('mouseleave', function () {
        image.src = `media/${name}.svg`;
    })
}

changeContactHome(emailContainer, email, 'envelope');
changeContactHome(linkedinContainer, linkedin, 'linkedin');
changeContactHome(githubContainer, github, 'github');
changeContactHome(twitterContainer, twitter, 'twitter');



