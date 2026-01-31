// 1. Manejo del Scroll para la Navegación
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    const logoText = document.getElementById('nav-logo-text');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
        logoText.classList.replace('text-white', 'text-slate-900');
        mobileBtn.classList.replace('text-white', 'text-slate-900');
        navLinks.forEach(link => {
            link.classList.replace('text-white/80', 'text-slate-600');
            link.classList.add('hover:text-amber-600');
        });
    } else {
        nav.classList.remove('nav-scrolled');
        logoText.classList.replace('text-slate-900', 'text-white');
        mobileBtn.classList.replace('text-slate-900', 'text-white');
        navLinks.forEach(link => {
            link.classList.replace('text-slate-600', 'text-white/80');
            link.classList.remove('hover:text-amber-600');
        });
    }
});

// 2. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const openMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu');

openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
});

const closeMenu = () => {
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'auto';
};

closeMenuBtn.addEventListener('click', closeMenu);
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));





// 5. Animaciones de Aparición (Scroll Reveal)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));