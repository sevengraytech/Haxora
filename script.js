// Simple Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const speed = 200;
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Mock Interactive CTA
document.querySelector('.btn-outline').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Threat Map loading... This would normally connect to a real-time API.");
});
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Optional: Add animation to the hamburger bars
    menu.classList.toggle('is-active');
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menu) {
        menu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menu.classList.toggle('is-active');
        });
    }

    // 2. Active Link Highlighter
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-item');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--primary)';
        }
    });

    // 3. Scroll Reveal for Cards
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .service-item, .post-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
// --- JavaScript for Scroll Animations & Mobile Menu ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = navLinks.classList.contains('active') 
            ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
        bars[1].style.opacity = navLinks.classList.contains('active') 
            ? '0' : '1';
        bars[2].style.transform = navLinks.classList.contains('active') 
            ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
    });

    // 2. Scroll Animation Observer
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the card is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a slight delay based on index for a "staggered" effect
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100); // 100ms delay between each card
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all service cards
    const cards = document.querySelectorAll('.service-card');
    
    // Start observing
    cards.forEach(card => {
        observer.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

  document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        const bars = document.querySelectorAll('.bar');
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.15,   // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'active' class to trigger animation
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards with 'fade-up' class
    const cards = document.querySelectorAll('.card.fade-up');
    
    cards.forEach(card => {
        observer.observe(card);
    });
});