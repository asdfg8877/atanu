// Navigation functionality
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Add active class to clicked nav item
    event.target.classList.add('active');
    
    // Animate skill bars when skills section is shown
    if (sectionName === 'skills') {
        setTimeout(() => {
            animateSkillBars();
        }, 300);
    }
}

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Resume download functionality
// function downloadResume() {
    // Create a comprehensive resume content
//     const resumeContent = `
// ALEX JOHNSON
// Creative Full-Stack Developer
// Email: alex@portfolio.com | Phone: +1 (555) 123-4567
// Location: San Francisco, CA
// LinkedIn: linkedin.com/in/alexjohnson | GitHub: github.com/alexjohnson

// PROFESSIONAL SUMMARY
// Passionate Full-Stack Developer with 3+ years of experience creating scalable web applications. 
// Expertise in modern JavaScript frameworks, cloud technologies, and agile development practices.
// Proven track record of improving application performance and leading development teams.

// EXPERIENCE

// Senior Full-Stack Developer | Tech Solutions Inc. | San Francisco, CA | 2022 - Present
// • Developed and maintained 15+ web applications using React, Node.js, and MongoDB
// • Led a team of 4 developers in creating scalable e-commerce solutions
// • Improved application performance by 40% through code optimization and database tuning
// • Implemented CI/CD pipelines reducing deployment time by 60%
// • Mentored junior developers in modern web development practices

// Full-Stack Developer | Digital Innovations | San Francisco, CA | 2020 - 2022
// • Built responsive web applications serving 10,000+ daily users
// • Implemented RESTful APIs and database design for multiple projects
// • Collaborated with UX/UI designers to create intuitive user interfaces
// • Reduced page load times by 35% through performance optimization
// • Participated in agile development processes and sprint planning

// Junior Web Developer | StartUp Hub | San Francisco, CA | 2019 - 2020
// • Developed frontend components using HTML, CSS, and JavaScript
// • Assisted in backend development with Node.js and Express
// • Participated in agile development processes and code reviews
// • Created responsive designs for mobile and desktop platforms
// • Contributed to open-source projects and internal tool development

// EDUCATION

// Bachelor of Computer Science | University of Technology | 2018 - 2022
// • Graduated with Honors, GPA: 3.8/4.0
// • Specialized in Software Engineering and Web Development
// • Completed capstone project: E-commerce platform with microservices architecture

// CERTIFICATIONS
// • Full-Stack Web Development - FreeCodeCamp (2022)
// • AWS Cloud Practitioner - Amazon Web Services (2023)
// • JavaScript Algorithms and Data Structures - FreeCodeCamp (2021)

// TECHNICAL SKILLS
// Frontend: HTML/CSS (95%), JavaScript (90%), React (85%), Vue.js (80%), TypeScript (75%)
// Backend: Node.js (88%), Python (82%), Express.js (85%), Django (70%)
// Databases: MongoDB (75%), PostgreSQL (78%), MySQL (70%), Redis (65%)
// Cloud & DevOps: AWS (80%), Docker (75%), Git (90%), CI/CD (70%)
// Tools: VS Code, Figma, Postman, Jest, Webpack, Babel

// KEY ACHIEVEMENTS
// • Led development of e-commerce platform serving 50,000+ users
// • Improved application performance by 40% through optimization techniques
// • Mentored 3 junior developers in modern web technologies
// • Implemented automated testing reducing bugs by 60%
// • Successfully delivered 20+ projects on time and within budget

// LANGUAGES
// • English (Native)
// • Spanish (Conversational)
// • French (Basic)

// INTERESTS
// • Open Source Contributions
// • Tech Blogging
// • UI/UX Design
// • Machine Learning
// • Photography
//             `;
    
    // Create and download the resume
    // const blob = new Blob([resumeContent], { type: 'text/plain' });
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'Alex_Johnson_Resume.txt';
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // window.URL.revokeObjectURL(url);
    
    // // Show download confirmation
    // showDownloadConfirmation();
// }

// // Show download confirmation
// function showDownloadConfirmation() {
//     // Create temporary notification
//     const notification = document.createElement('div');
//     notification.className = 'fixed top-20 right-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
//     notification.innerHTML = `
//         <div class="flex items-center space-x-2">
//             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//             </svg>
//             <span>Resume downloaded successfully!</span>
//         </div>
//     `;
    
//     document.body.appendChild(notification);
    
//     // Animate in
//     setTimeout(() => {
//         notification.style.transform = 'translateX(0)';
//     }, 100);
    
//     // Animate out and remove
//     setTimeout(() => {
//         notification.style.transform = 'translateX(100%)';
//         setTimeout(() => {
//             document.body.removeChild(notification);
//         }, 300);
//     }, 3000);
// }

// Contact form functionality
function showMessage() {
    const modal = document.getElementById('messageModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Clear form
    const form = document.querySelector('form');
    form.reset();
    
    // Add animation class
    const modalContent = modal.querySelector('.card');
    modalContent.style.transform = 'scale(0.8)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
        modalContent.style.transition = 'all 0.3s ease';
    }, 50);
}

function closeMessage() {
    const modal = document.getElementById('messageModal');
    const modalContent = modal.querySelector('.card');
    
    modalContent.style.transform = 'scale(0.8)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

// Form validation
function validateForm() {
    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();
    
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'from-green-400 to-blue-500' : 'from-red-400 to-pink-500';
    
    notification.className = `fixed top-20 right-6 bg-gradient-to-r ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation
// function smoothScrollTo(element) {
//     element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     });
// }

// Navigation functionality
function showSection(sectionName, event) {
    if (event) event.preventDefault(); // stop browser scroll

    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = "none";
    });
    
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    const target = document.getElementById(sectionName);
    if (target) {
        target.classList.add('active');
        target.style.display = "flex"; // keep flex layout
    }
    
    // Add active class to clicked nav item
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Animate skill bars when skills section is shown
    if (sectionName === 'skills') {
        setTimeout(() => {
            animateSkillBars();
        }, 300);
    }
}


// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize skill bars animation for the about section
    setTimeout(() => {
        if (document.getElementById('about').classList.contains('active')) {
            // Add any initialization animations here
        }
    }, 1000);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMessage();
        }
    });
    
    // Add click outside to close modal
    document.getElementById('messageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeMessage();
        }
    });
    
    // Lazy load animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards for animation
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});

// Prevent form submission and handle with JavaScript
document.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        showMessage();
    }
});

// Add loading states for better UX
function addLoadingState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
    `;
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Enhanced mobile navigation
function toggleMobileMenu() {
    const nav = document.querySelector('nav .flex');
    nav.classList.toggle('mobile-open');
}

// Add resize listener for responsive adjustments
window.addEventListener('resize', function() {
    // Adjust animations based on screen size
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        // Disable some animations on mobile for better performance
        document.querySelectorAll('.floating').forEach(el => {
            el.style.animation = 'none';
        });
    } else {
        // Re-enable animations on desktop
        document.querySelectorAll('.floating').forEach(el => {
            el.style.animation = 'float 6s ease-in-out infinite';
        });
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

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

// Performance optimization
const debouncedResize = debounce(() => {
    // Handle resize events
    console.log('Window resized');
}, 250);

window.addEventListener('resize', debouncedResize);

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Add your analytics tracking code here
    console.log('Event tracked:', eventName, eventData);
}

// Track navigation clicks
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        trackEvent('navigation_click', {
            section: item.textContent.trim()
        });
    });
});

// Track resume download
function trackResumeDownload() {
    trackEvent('resume_download', {
        timestamp: new Date().toISOString()
    });
}

// Track contact form submission
function trackContactSubmission() {
    trackEvent('contact_form_submit', {
        timestamp: new Date().toISOString()
    });
}

// Additional interactive features
function addParticleEffect() {
    // Simple particle effect for background
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-2';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize particle effect on load
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment the line below to enable particle effect
    // addParticleEffect();
});

// Smooth page transitions
function initPageTransitions() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    initPageTransitions();
    
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Theme switcher (bonus feature)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    
    if (currentTheme === 'light') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    document.querySelectorAll('.card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Error handling for better user experience
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You could show a user-friendly error message here
});

// Service worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to register service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(function(registrationError) {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}