// Cambio de estilo del Navbar al hacer Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// Menú Móvil (Funcionalidad básica)
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('ul');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-20');
    navLinks.classList.toggle('left-0');
    navLinks.classList.toggle('w-full');
    navLinks.classList.toggle('bg-[#4B2C7F]');
    navLinks.classList.toggle('p-6');
    navLinks.classList.toggle('items-center');
});

// Observador para animaciones al entrar en pantalla (opcional)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

// Aplicar a las tarjetas de servicios (necesitan clases iniciales de opacidad en el HTML)
document.querySelectorAll('.grid > div').forEach(card => {
    // card.classList.add('transition', 'duration-700', 'opacity-0', 'translate-y-10');
    // observer.observe(card);
});