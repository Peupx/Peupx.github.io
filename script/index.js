// Education & Career Tabs

const buttons = document.querySelectorAll('.TabBtn');
const contents = document.querySelectorAll('.TabItem');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        buttons.forEach(btn => btn.classList.remove('Active'));
        
        contents.forEach(content => content.classList.remove('Active'));

        button.classList.add('Active');

        document.getElementById(target).classList.add('Active');
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.SectionLinks a');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});


// Modal

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('OpenModal');
    const closeModalBtn = document.getElementById('CloseModal');
    const modal = document.getElementById('ResumeModal');
    const overlay = document.querySelector('.ModalOverlay');

    openModalBtn.addEventListener('click', () => {
        modal.classList.add('Active');
        document.body.style.overflow = 'hidden';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('Active');
        document.body.style.overflow = 'auto';
    });

    overlay.addEventListener('click', () => {
        modal.classList.remove('Active');
        document.body.style.overflow = 'auto';
    });
});



// Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    delay: 200,
    reset: false
});

// --- Hero Section (About Me) ---
sr.reveal('.AboutMeIntro', { origin: 'left', distance: '50px' });
sr.reveal('.AboutMeText', { delay: 400 });
sr.reveal('.AboutMeButtons', { delay: 600, origin: 'bottom' });
sr.reveal('.AboutMeSocialLinks', { delay: 800, interval: 100 });
sr.reveal('.Right-Top', { origin: 'right', distance: '50px', delay: 500 });

// --- Seções Gerais (Títulos e Linhas) ---
sr.reveal('.SkillsIntro, .ProjectsIntro, .EducationCarrerIntro', { interval: 100 });
sr.reveal('.ViewLine', { scale: 0.1, duration: 1000, origin: "center" });

// --- Skills ---
sr.reveal('.SkillLevelContainer', { scale: 0.1, duration: 500, interval: 150 , origin: "center"  });
sr.reveal('.SkillBox', { interval: 150, origin: 'bottom', distance: '20px' });

// --- Projects ---
sr.reveal('.ProjectCard', { interval: 200, origin: 'bottom', distance: '40px' });
sr.reveal('.ViewAllLink', { delay: 300 });

// --- Education & Career ---
sr.reveal('.TabsButtons', { delay: 200 });
sr.reveal('.ECCard', { interval: 150, origin: 'left', distance: '20px' });

// --- Contact ---
sr.reveal('.ContactHeadline', { scale: 0.9, duration: 1200 });
sr.reveal('.ContactSub', { delay: 300 });
sr.reveal('.ContactAction', { delay: 500, origin: 'bottom' });
sr.reveal('.ContactFootnote', { delay: 700 });

// --- Footer ---
sr.reveal('.FooterSocials a', { interval: 100, origin: 'bottom' });