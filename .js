document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#111';
    } else {
        navbar.style.backgroundColor = '#222';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        alert('Welcome to my projects section!');
    });
});