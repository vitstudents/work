document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const modelPlaceholder = document.querySelector('.placeholder-model');
    const sections = document.querySelectorAll('.section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    const handleScroll = () => {
        const scrollPos = window.scrollY;
        
        // Simple parallax effect
        if (heroTitle) heroTitle.style.transform = `translateY(${scrollPos * 0.5}px)`;
        if (heroSubtitle) heroSubtitle.style.transform = `translateY(${scrollPos * 0.5}px)`;
        if (modelPlaceholder) modelPlaceholder.style.transform = `translateY(-${scrollPos * 0.2}px)`;

        // Section fade-in animation
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            } else {
                section.classList.remove('fade-in');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set correct state
});