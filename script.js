// Countdown Timer Functionality
function updateCountdown() {
    const now = new Date().getTime();
    // Set opening date to 10 days from now (you can change this to the actual opening date)
    const openingDate = new Date(now + (10 * 24 * 60 * 60 * 1000)).getTime();
    const timeLeft = openingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update countdown display
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');

    // Check if countdown has ended
    if (timeLeft < 0) {
        const countdownTitle = document.querySelector('.countdown-title');
        const countdownSubtitle = document.querySelector('.countdown-subtitle');
        const countdownTimer = document.querySelector('.countdown-timer');
        
        if (countdownTitle) countdownTitle.textContent = "We're Open!";
        if (countdownSubtitle) countdownSubtitle.textContent = "Welcome to The Mudroom Coffee Company";
        if (countdownTimer) countdownTimer.style.display = 'none';
        
        clearInterval(countdownInterval);
    }
}

// Mobile Navigation Toggle
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
        // Check if element is already in view and show it immediately
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Element is in view, show it immediately
            el.classList.add('visible');
        }
        
        observer.observe(el);
    });
}

// Newsletter Form Handler
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('.newsletter-input');
            const submitBtn = this.querySelector('.newsletter-btn');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Simulate form submission
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Subscribed!';
                    emailInput.value = '';
                    
                    setTimeout(() => {
                        submitBtn.textContent = 'Notify Me';
                        submitBtn.disabled = false;
                    }, 2000);
                }, 1000);
            } else {
                emailInput.style.borderColor = '#e74c3c';
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                }, 3000);
            }
        });
    }
}

// Email Validation Helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Don't apply fade effect to images, just ensure they're visible
                img.style.opacity = '1';
                img.style.transition = 'opacity 0.3s ease';
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        // Ensure all images are visible by default
        img.style.opacity = '1';
        imageObserver.observe(img);
    });
}

// Parallax Effect for Hero Section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
}

// Performance Optimization: Throttle Scroll Events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown timer
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Initialize all features
    initMobileNavigation();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initNewsletterForm();
    initLazyLoading();
    initParallaxEffect();
    
    // Add animation classes to elements AFTER initializing scroll animations
    setTimeout(() => {
        const aboutText = document.querySelector('.about-text');
        const aboutImages = document.querySelector('.about-images');
        const menuCategories = document.querySelectorAll('.menu-category');
        const locationInfo = document.querySelector('.location-info');
        const locationVisual = document.querySelector('.location-visual');
        
        if (aboutText) aboutText.classList.add('fade-in');
        if (aboutImages) aboutImages.classList.add('fade-in');
        if (locationInfo) locationInfo.classList.add('slide-in-left');
        if (locationVisual) locationVisual.classList.add('slide-in-right');
        
        menuCategories.forEach((category, index) => {
            category.classList.add('fade-in');
            category.style.animationDelay = `${index * 0.2}s`;
        });
        
        // Initialize scroll animations AFTER adding classes
        initScrollAnimations();
    }, 100);
});

// Handle window resize events
window.addEventListener('resize', throttle(() => {
    // Close mobile menu on resize
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth > 768) {
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    }
}, 250));

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.log('An error occurred:', e.error);
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu?.classList.contains('active')) {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Export functions for potential external use
window.MudroomCoffee = {
    updateCountdown,
    initMobileNavigation,
    initSmoothScrolling,
    initScrollAnimations
};