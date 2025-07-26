
ScrollReveal().reveal('.section-title', {
    origin: 'left',
    distance: '40px',
    duration: 800,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.section-text, .skill-card, .project-card', {
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    easing: 'ease-in-out',
    interval: 200,
    reset: false
});

ScrollReveal().reveal('.btn-contact', {
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    delay: 400,
    reset: false
});


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightMenu() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightMenu);
