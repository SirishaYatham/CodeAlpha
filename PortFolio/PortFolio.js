// script.js

// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const moonIcon = document.querySelector('.moon-icon');

    moonIcon.addEventListener('click', () => {
        // Toggle dark mode for body
        document.body.classList.toggle('dark-mode');

        // Toggle dark mode for navbar
        document.querySelector('.navbar').classList.toggle('dark-mode');

        // Toggle dark mode for sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.toggle('dark-mode');
        });

        // Toggle dark mode for elements inside sections
        document.querySelectorAll('.para-container,.about p, .skills-list p, .netflix-container button, .contact-details a').forEach(element => {
            element.classList.toggle('dark-mode');
        });
    });
});

