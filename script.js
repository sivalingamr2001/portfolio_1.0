document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('nav, .about, .experience, .skills, .contact-me, .resume-download');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1 // Adjust this value as needed
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});