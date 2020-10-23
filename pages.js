// CONTACT HOVER
function changeContactHome(container, image, name) {
    container.addEventListener('mouseenter', function () {
        image.src = `../media/white-${name}.svg`;
    })
    container.addEventListener('mouseleave', function () {
        image.src = `../media/${name}.svg`;
    })
}

changeContactHome(emailContainer, email, 'envelope');
changeContactHome(linkedinContainer, linkedin, 'linkedin');
changeContactHome(githubContainer, github, 'github');