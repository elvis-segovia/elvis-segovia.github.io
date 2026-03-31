// ── Init AOS ──────────────────────────────────
AOS.init({ once: true, offset: 80 });

// ── Init Lucide Icons ─────────────────────────
lucide.createIcons();

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile menu ───────────────────────────────
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
let menuOpen = false;

mobileToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navLinks.classList.toggle('open', menuOpen);
    // Swap icon
    mobileToggle.innerHTML = menuOpen
        ? '<i data-lucide="x" style="width:24px;height:24px"></i>'
        : '<i data-lucide="menu" style="width:24px;height:24px"></i>';
    lucide.createIcons();
});

function closeMenu() {
    menuOpen = false;
    navLinks.classList.remove('open');
    mobileToggle.innerHTML = '<i data-lucide="menu" style="width:24px;height:24px"></i>';
    lucide.createIcons();
}

// ── Active nav link on scroll ─────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navAnchors.forEach(a => {
                a.style.color = a.getAttribute('href') === '#' + entry.target.id
                    ? 'var(--white)' : '';
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));