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
    appearEffectSections.forEach(section => { scrollAppear(section) })
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

let windowWidth = window.matchMedia("(min-width: 1000px)");

function changeContactHome(container, image, name) {
    container.addEventListener('mouseenter', function () {
        image.src = `media/white-${name}.svg`;
    })
    container.addEventListener('mousemove', function () {
        image.src = `media/white-${name}.svg`;
    })
    // ADD DELAY IF EMAIL
    if (container == emailContainer) {
        container.addEventListener('mouseleave', function () {
            setTimeout(() => {

                image.src = `media/${name}.svg`;
            }, 1000);
        })
    } else {
        container.addEventListener('mouseleave', function () {
            setTimeout(() => {

                image.src = `media/${name}.svg`;
            }, 0);
        })
    }
}

changeContactHome(emailContainer, email, 'envelope');
changeContactHome(linkedinContainer, linkedin, 'linkedin');
changeContactHome(githubContainer, github, 'github');

// COPY EMAIL TO CLIPBOARD
const expandEmail = () => {
    if (windowWidth.matches) {
        const link = emailContainer.querySelector('p');
        link.style.opacity = "1";
        link.style.transform = "translateX(0)";
        emailContainer.classList.add("active")
        email.style.left = "40px";
    } else {
        return null;
    }
}

const hideEmail = () => {
    if (windowWidth.matches) {

        const link = emailContainer.querySelector('p');
        link.style.opacity = "0"
        link.style.transform = "translateX(-50px)";
        emailContainer.classList.remove("active");
        email.style.left = "50%";
    } else {
        return null;
    }


}

emailContainer.addEventListener("mouseenter", () => {
    setTimeout(() => {
        expandEmail()
    }, 500);
});
emailContainer.addEventListener("mousemove", expandEmail);
emailContainer.addEventListener("mouseleave", () => {
    setTimeout(() => {
        hideEmail();
    }, 1000);
}

);

