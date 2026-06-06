// ============================================
// PERSONAL WEBSITE - MAIN JAVASCRIPT
// Core functionality for interactive features
// ============================================

// ========================================
// DYNAMIC YEAR UPDATE
// Automatically updates copyright year across all pages
// ========================================
const currentYear = new Date().getFullYear();
document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = currentYear;
});

// ========================================
// YEARS OF EXPERIENCE CALCULATION
// Dynamically calculates and displays years of experience
// Based on first professional role start date
// ========================================
const FIRST_EXPERIENCE_YEAR = 2013; // Start date: February 2013 - Solutions Infotech
const yearsOfExperience = currentYear - FIRST_EXPERIENCE_YEAR;

document.querySelectorAll('[data-years-experience]').forEach((element) => {
    element.textContent = yearsOfExperience;
});

// ========================================
// MOBILE NAVIGATION TOGGLE
// Handles hamburger menu functionality
// Includes icon animation and menu state management
// ========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    // Toggle menu visibility on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger icon to X shape when menu is open
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active')
            ? 'rotate(45deg) translate(5px, 5px)'
            : 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active')
            ? 'rotate(-45deg) translate(7px, -6px)'
            : 'rotate(0) translate(0, 0)';
    });

    // Auto-close mobile menu when user clicks a navigation link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            
            // Reset hamburger icon to original state
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'rotate(0) translate(0, 0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translate(0, 0)';
        });
    });
}

// ========================================
// SMOOTH SCROLLING
// Enables smooth scroll behavior for anchor links
// Accounts for fixed navbar height
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Offset for fixed navbar (70px)
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// Changes navbar background opacity and shadow on scroll
// Provides visual feedback for page position
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// ========================================
// SCROLL REVEAL ANIMATION
// Animates elements as they enter viewport
// Uses Intersection Observer API for performance
// ========================================
const observerOptions = {
    threshold: 0.1,              // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'  // Start animation 50px before element enters viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards with mobile-friendly fallback
// Prevents blank pages on mobile by skipping animation on small screens
document.querySelectorAll('section, .skill-card, .project-card, .stat').forEach(el => {
    // Only apply animation on screens wider than 768px
    if (window.innerWidth > 768) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    } else {
        // On mobile devices, show elements immediately without animation
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }
});

// ========================================
// CONTACT FORM HANDLING
// Processes contact form submissions
// Currently shows alert, can be extended for API integration
// ========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Extract form field values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // TODO: Integrate with backend API or email service
        // Currently logs to console for development
        console.log('Form submitted:', formData);
        
        // Display success notification to user
        alert('Thank you for your message! I will get back to you soon.');
        
        // Clear all form fields after submission
        contactForm.reset();
    });
}

// ========================================
// TYPING EFFECT FOR HERO TITLE
// Feature disabled to preserve HTML formatting
// Can be re-enabled if plain text title is used
// ========================================
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const text = heroTitle.innerHTML;
//     heroTitle.innerHTML = '';
//     let i = 0;
//
//     function typeWriter() {
//         if (i < text.length) {
//             heroTitle.innerHTML += text.charAt(i);
//             i++;
//             setTimeout(typeWriter, 50);
//         }
//     }
//
//     // Start typing effect after a short delay
//     setTimeout(typeWriter, 500);
// }

// ========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// Highlights current section in navigation menu
// Updates based on scroll position
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// ========================================
// PARALLAX EFFECT FOR HERO SECTION
// Feature disabled to prevent layout issues
// Avoids white gaps during scroll on homepage
// ========================================

// ========================================
// PROJECT CARDS HOVER EFFECT
// Adds lift and scale animation on hover
// Provides visual feedback for interactive elements
// ========================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// SKILL CARDS HOVER ANIMATION
// Animates skill icons on hover
// Adds scale and rotation for visual interest
// ========================================
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ========================================
// COUNTER ANIMATION FOR STATISTICS
// Animates numbers counting up from 0 to target value
// Triggered when stats section enters viewport
// ========================================
/**
 * Animates a counter from 0 to target value
 * @param {HTMLElement} element - Element to update with counter value
 * @param {number} target - Final counter value
 * @param {number} duration - Animation duration in milliseconds (default: 2000ms)
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 16ms per frame (60fps)
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Intersection Observer for triggering counter animations
// Ensures animation only runs once when stats become visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const targetValue = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetValue);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// PAGE LOAD ANIMATION
// Fades in page content on initial load
// Provides smooth entry experience
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Development log for successful script initialization
console.log('Personal website loaded successfully! 🚀');