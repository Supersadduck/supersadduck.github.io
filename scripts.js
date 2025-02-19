document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetID = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});