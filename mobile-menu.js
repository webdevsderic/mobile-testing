/**
 * God's Awe Worship Ministries - Mobile Menu Handler
 * Dedicated mobile navigation functionality
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuToggle || !mobileMenu) {
        console.error('Menu elements not found');
        return;
    }

    // Toggle menu when button is clicked
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
    });

    // Close menu when any link is clicked
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});

/**
 * God's Awe Worship Ministries - Core Script Architecture
 * Coordinates UI transitions, modal states, and form feedback.
 */

// 1. OPEN MODAL INTERACTION ENGINE
function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    } else {
        console.error(`System Error: Modal with ID "${modalId}" could not be located.`);
    }
}

// 2. CLOSE MODAL INTERACTION ENGINE
function closeModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore background scrolling
    }
}

// 3. GLOBAL DISMISSAL TRACKER (Clicks outside the active window area)
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('ksf-modal-overlay-backdrop')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// 4. INSTANT KEYBOARD ESCAPE ROUTINE
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModals = document.querySelectorAll('.ksf-modal-overlay-backdrop.active');
        activeModals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }
});

// 5. ASYNCHRONOUS FORM HANDLING SIMULATION
function executeFormSubmission(event) {
    event.preventDefault(); // Halt normal page reloads
    
    const feedbackZone = document.getElementById('submissionStatusFeedback');
    const contactForm = document.getElementById('institutionalContactForm');
    
    if (feedbackZone) {
        feedbackZone.style.color = 'var(--ksf-gold, #b89535)';
        feedbackZone.textContent = 'Transmitting secure message context...';
        
        // Simulate a sleek network processing handshake delay
        setTimeout(() => {
            feedbackZone.style.color = '#10b981'; // Success Green
            feedbackZone.textContent = 'Message successfully dispatched! We will connect soon.';
            if (contactForm) {
                contactForm.reset(); // Wipe inputs clear
            }
        }, 1500);
    }
}
