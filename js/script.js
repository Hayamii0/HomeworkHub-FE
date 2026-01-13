// script.js - Main JavaScript for HomeworkHub

// Image details data for homepage
const imageDetails = {
    1: {
        title: "Interactive Learning Environment",
        description: "Our platform provides an immersive learning experience with interactive elements that engage students in active participation. Research shows that interactive learning increases retention rates by up to 75% compared to passive learning methods.",
        details: "Features include: <ul><li>Drag-and-drop activities</li><li>Simulation-based learning</li><li>Instant feedback system</li><li>Gamified elements</li></ul>",
        imageUrl: "https://thumbs.dreamstime.com/b/sabah-malaysia-april-classroom-malaysian-primary-school-children-kota-kinabalu-having-english-language-lesson-using-107488957.jpg"
    },
    2: {
        title: "Collaborative Study Groups",
        description: "HomeworkHub facilitates collaborative learning through virtual study groups. Students can work together on assignments, share resources, and learn from each other in a structured environment.",
        details: "Benefits include: <ul><li>Peer-to-peer learning</li><li>Shared whiteboard for brainstorming</li><li>Group assignment tracking</li><li>Real-time chat and discussion</li></ul>",
        imageUrl: "https://ajar.com.my/wp-content/uploads/2018/11/edud_jk_pg6g_4cols_1805-768x514.jpg"
    },
    3: {
        title: "Modern Classroom Technology",
        description: "We integrate cutting-edge technology to create a modern learning environment that prepares students for the digital age. Our adaptive learning system personalizes content based on individual progress and learning style.",
        details: "Technology features: <ul><li>AI-powered recommendations</li><li>Progress analytics dashboard</li><li>Cross-platform compatibility</li><li>Accessibility features for all learners</li></ul>",
        imageUrl: "https://iluminasi.com/img/upload/budak-sekolah-gembira-dapat-keputusan-cemerlang.jpg"
    }
};

// DOM Elements for homepage
let imageCards, modal, closeModal, modalTitle, modalImage, modalBody;

// Function to create fallback content for images
function fallbackContent(title, description) {
    return `
        <div class="image-fallback">
            <i class="fas fa-chalkboard-teacher"></i>
            <h4>${title}</h4>
            <p>${description}</p>
        </div>
        <div class="image-overlay">
            <h4>${title}</h4>
            <p>${description}</p>
        </div>
    `;
}

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-btn');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check for exact match or if it's index.html on homepage
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Animate stats numbers (for homepage only)
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return; // Only run if on homepage
    
    statNumbers.forEach(stat => {
        const originalText = stat.textContent;
        stat.textContent = '0';

        setTimeout(() => {
            let current = 0;
            const target = parseFloat(originalText);
            const isDecimal = originalText.includes('.');
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = originalText;
                    clearInterval(timer);
                } else {
                    if (isDecimal) {
                        stat.textContent = current.toFixed(1);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }
            }, 30);
        }, 500);
    });
}

// Add hover effects to features (for homepage only)
function addFeatureHoverEffects() {
    const features = document.querySelectorAll('.feature');
    if (features.length === 0) return; // Only run if on homepage
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        feature.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Check and fix broken images
function fixBrokenImages() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function () {
            const card = this.closest('.image-card');
            if (card) {
                const overlay = card.querySelector('.image-overlay');
                const title = overlay?.querySelector('h4')?.textContent || 'Modern Classroom';
                const desc = overlay?.querySelector('p')?.textContent || 'Advanced tools for better education';
                card.innerHTML = fallbackContent(title, desc);
            }
        });
    });
}

// Open modal with image details (for homepage only)
function openModal(imageId) {
    const detail = imageDetails[imageId];

    if (!detail) {
        console.error('Image details not found for ID:', imageId);
        return;
    }

    modalTitle.textContent = detail.title;
    modalImage.src = detail.imageUrl;
    modalImage.alt = detail.title;

    modalBody.innerHTML = `
        <p><strong>${detail.description}</strong></p>
        <p>${detail.details}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
            <p><i class="fas fa-lightbulb"></i> <strong>Did you know?</strong> Clicking different images shows different information. Try it!</p>
        </div>
    `;

    modal.style.display = 'flex';
}

// Close modal
function closeModalHandler() {
    modal.style.display = 'none';
}

// Initialize image modal functionality (for homepage only)
function initializeImageModal() {
    imageCards = document.querySelectorAll('.image-card');
    modal = document.getElementById('image-modal');
    closeModal = document.getElementById('close-modal');
    modalTitle = document.getElementById('modal-title');
    modalImage = document.getElementById('modal-image');
    modalBody = document.getElementById('modal-body');

    // Only initialize if on homepage with image cards
    if (imageCards.length === 0) return;

    // Image card click events
    imageCards.forEach(card => {
        card.addEventListener('click', function () {
            const imageId = this.getAttribute('data-image');
            openModal(imageId);
        });
    });

    // Close modal events
    closeModal.addEventListener('click', closeModalHandler);
    
    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModalHandler();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModalHandler();
        }
    });
}

// Initialize the application
function init() {
    highlightCurrentPage();
    animateStats();
    addFeatureHoverEffects();
    fixBrokenImages();
    initializeImageModal();
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally if needed
window.fallbackContent = fallbackContent;

function checkLoginStatus() {
    // Only check if not on login page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'login.html' || currentPage === '') {
        return;
    }
    
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // Redirect to login page
        window.location.href = 'login.html';
    }
}

// Add this to your init() function in script.js
function init() {
    highlightCurrentPage();
    animateStats();
    addFeatureHoverEffects();
    fixBrokenImages();
    initializeEventListeners();
    checkLoginStatus(); // Add this line
}