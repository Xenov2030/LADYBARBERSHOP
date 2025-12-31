// 1. Gestión del Navbar al hacer Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('glass-nav', 'py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.remove('glass-nav', 'py-2');
        navbar.classList.add('py-4');
    }
});

// 2. Animación de Hero al cargar
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.classList.add('opacity-100', 'translate-y-0');
        heroContent.classList.remove('opacity-0', 'translate-y-10');
    }, 300);
});

// 3. Menú Móvil
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('top-20');
    navMenu.classList.toggle('left-0');
    navMenu.classList.toggle('w-full');
    navMenu.classList.toggle('bg-[#1A1A1D]');
    navMenu.classList.toggle('p-10');
    navMenu.classList.toggle('text-center');
    navMenu.classList.toggle('border-b');
    navMenu.classList.toggle('border-[#D9A036]');
});

// 4. Observador de Secciones (Efecto de Página Viva)
const sections = document.querySelectorAll('.section-reveal');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// 5. Función de WhatsApp Dinámica
function enviarWhatsApp() {
    const select = document.getElementById('servicio-select');
    const servicio = select.options[select.selectedIndex].text;
    
    const telefono = "5491122334455"; // Reemplazar con el número real de Patricia
    const texto = `Hola Patricia Díaz! 👋%0A%0AQuiero agendar un turno para el servicio de:* ${servicio}*.%0A%0AMe podrías comentar qué disponibilidad tienes? Gracias! ✨`;
    
    const url = `https://wa.me/${telefono}?text=${texto}`;
    window.open(url, '_blank');
}

// 6. Carga diferida de Scripts de Redes Sociales
(function() {
    const s = document.createElement('script');
    s.async = true;
    s.src = "//www.instagram.com/embed.js";
    document.body.appendChild(s);
})();