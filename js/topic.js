// topic.js - Topic Page Specific JavaScript

// Topic data for Form 4 and Form 5 with images
const topicData = {
    4: [
        {
            id: 1,
            title: "Scientific Methodology",
            icon: "fas fa-clipboard-check",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Introduction to scientific investigation methods, variables, hypothesis formulation, and experimental design.",
            lessons: 6,
            experiments: 3,
            duration: "4 hours",
            difficulty: "Medium",
            color: "var(--science-blue)",
            youtubeId: "JTA1V6yjLi4", // The Scientific Method: Crash Course Biology #2
            youtubeTitle: "Scientific Method Explained"
        },
        {
            id: 2,
            title: "Body Coordination",
            icon: "fas fa-brain",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Study of nervous system, hormones, brain functions, and coordination between body systems.",
            lessons: 8,
            experiments: 2,
            duration: "5 hours",
            difficulty: "Hard",
            color: "var(--science-green)",
            youtubeId: "qPix_X-9t7E", // Nervous System
            youtubeTitle: "Human Nervous System Explained"
        },
        {
            id: 3,
            title: "Heredity and Variation",
            icon: "fas fa-dna",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Understanding genetics, DNA, chromosomes, inheritance patterns, and genetic variation.",
            lessons: 7,
            experiments: 4,
            duration: "6 hours",
            difficulty: "Hard",
            color: "var(--science-purple)",
            youtubeId: "CBezq1fFUEA", // Heredity: Crash Course Biology #9
            youtubeTitle: "Genetics and Heredity Basics"
        },
        {
            id: 4,
            title: "Matter in Nature",
            icon: "fas fa-atom",
            image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Properties of matter, states of matter, atomic structure, and chemical reactions.",
            lessons: 9,
            experiments: 5,
            duration: "7 hours",
            difficulty: "Medium",
            color: "var(--science-red)",
            youtubeId: "1t6-bCiY-y4", // States of Matter
            youtubeTitle: "States of Matter Explained"
        },
        {
            id: 5,
            title: "Energy and Chemical Changes",
            icon: "fas fa-bolt",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Energy transformations, heat, light, chemical energy, and conservation of energy.",
            lessons: 6,
            experiments: 3,
            duration: "4 hours",
            difficulty: "Easy",
            color: "var(--science-orange)",
            youtubeId: "dG6A8HcP8gA", // Energy and Chemical Changes
            youtubeTitle: "Energy Transformations in Chemistry"
        }
    ],
    5: [
        {
            id: 1,
            title: "Microorganisms & Biotechnology",
            icon: "fas fa-bacteria",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Study of microorganisms, their applications in biotechnology, and genetic engineering.",
            lessons: 7,
            experiments: 4,
            duration: "5 hours",
            difficulty: "Medium",
            color: "var(--science-blue)",
            youtubeId: "8DeHgg6qg7c", // Microorganisms and Biotechnology
            youtubeTitle: "Introduction to Biotechnology"
        },
        {
            id: 2,
            title: "Nutrition & Food Technology",
            icon: "fas fa-utensils",
            image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Balanced diet, food processing, preservation methods, and food additives.",
            lessons: 6,
            experiments: 3,
            duration: "4 hours",
            difficulty: "Easy",
            color: "var(--science-green)",
            youtubeId: "YimuIdEZSNY", // Nutrition and Food Technology
            youtubeTitle: "Food Science and Nutrition"
        },
        {
            id: 3,
            title: "Synthetic Materials",
            icon: "fas fa-industry",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Polymers, plastics, synthetic fibers, and their applications in modern industry.",
            lessons: 5,
            experiments: 2,
            duration: "3 hours",
            difficulty: "Medium",
            color: "var(--science-purple)",
            youtubeId: "JcHmPlH8VYw", // Polymers and Plastics
            youtubeTitle: "Synthetic Materials and Polymers"
        },
        {
            id: 4,
            title: "Electronics & IT",
            icon: "fas fa-microchip",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Electronic components, circuits, semiconductors, and information technology.",
            lessons: 8,
            experiments: 4,
            duration: "6 hours",
            difficulty: "Hard",
            color: "var(--science-red)",
            youtubeId: "mCq8-xTH7jA", // Electronics Basics
            youtubeTitle: "Introduction to Electronics"
        },
        {
            id: 5,
            title: "Space Exploration",
            icon: "fas fa-rocket",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Astronomy, space technology, satellites, and future of space exploration.",
            lessons: 7,
            experiments: 3,
            duration: "5 hours",
            difficulty: "Medium",
            color: "var(--science-orange)",
            youtubeId: "HCDVN7DCzYE", // Space Exploration
            youtubeTitle: "Space Technology and Exploration"
        }
    ]
};

// DOM Elements
const formDropdownBtn = document.getElementById('formDropdownBtn');
const formDropdown = document.getElementById('formDropdown');
const dropdownArrow = document.getElementById('dropdownArrow');
const selectedFormText = document.getElementById('selectedFormText');
const selectedFormDisplay = document.getElementById('selectedFormDisplay');
const selectedFormIcon = document.getElementById('selectedFormIcon');
const selectedFormTitle = document.getElementById('selectedFormTitle');
const selectedFormDesc = document.getElementById('selectedFormDesc');
const topicsContainer = document.getElementById('topicsContainer');

// Preview Modal Elements
const previewModal = document.getElementById('previewModal');
const closePreviewModal = document.getElementById('closePreviewModal');
const closePreviewBtn = document.getElementById('closePreviewBtn');
const previewTitle = document.getElementById('previewTitle');
const previewForm = document.getElementById('previewForm');
const previewLessons = document.getElementById('previewLessons');
const previewExperiments = document.getElementById('previewExperiments');
const previewDuration = document.getElementById('previewDuration');
const previewDifficulty = document.getElementById('previewDifficulty');
const startLearningFromPreview = document.getElementById('startLearningFromPreview');

// State variables
let currentForm = 4; // Default form
let currentPreviewTopicId = null;
let currentPreviewForm = null;

// Toggle dropdown
formDropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    formDropdown.classList.toggle('show');
    dropdownArrow.classList.toggle('fa-chevron-down');
    dropdownArrow.classList.toggle('fa-chevron-up');
});

// Close dropdown when clicking outside
document.addEventListener('click', function () {
    formDropdown.classList.remove('show');
    dropdownArrow.classList.add('fa-chevron-down');
    dropdownArrow.classList.remove('fa-chevron-up');
});

// Prevent dropdown from closing when clicking inside it
formDropdown.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Function to select form
function selectForm(form) {
    currentForm = form;

    // Update dropdown button text
    selectedFormText.textContent = `Form ${form} Science`;

    // Update active option in dropdown
    document.querySelectorAll('.form-option').forEach(option => {
        option.classList.remove('active');
        if (parseInt(option.getAttribute('data-form')) === form) {
            option.classList.add('active');
        }
    });

    // Update selected form display
    selectedFormDisplay.style.display = 'flex';
    selectedFormTitle.textContent = `Form ${form} Science`;
    selectedFormDesc.textContent = form === 4
        ? "Currently viewing Form 4 science topics. Select a topic below to start learning."
        : "Currently viewing Form 5 science topics. Select a topic below to start learning.";

    // Update icon
    selectedFormIcon.innerHTML = form === 4
        ? '<i class="fas fa-flask"></i>'
        : '<i class="fas fa-microscope"></i>';
    selectedFormIcon.style.background = form === 4
        ? 'var(--gradient-blue)'
        : 'var(--gradient-green)';

    // Load topics for selected form
    loadTopics(form);

    // Close dropdown
    formDropdown.classList.remove('show');
    dropdownArrow.classList.add('fa-chevron-down');
    dropdownArrow.classList.remove('fa-chevron-up');
}

// Function to load topics
function loadTopics(form) {
    const topics = topicData[form];
    const defaultImage = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

    topicsContainer.innerHTML = topics.map(topic => `
        <div class="topic-card">
            <!-- Topic Image -->
            <div class="topic-image">
                <img src="${topic.image}" 
                     alt="${topic.title}" 
                     onerror="this.src='${defaultImage}'">
                <div class="topic-number">${topic.id}</div>
            </div>
            
            <!-- Topic Header -->
            <div class="topic-header" style="background: linear-gradient(135deg, ${topic.color}, ${topic.color}99);">
                <div class="topic-icon">
                    <i class="${topic.icon}"></i>
                </div>
                <h3>${topic.title}</h3>
                <p class="topic-form">Form ${form} Science</p>
            </div>
            
            <!-- Topic Content -->
            <div class="topic-content">
                <p class="topic-description">${topic.description}</p>
                
                <div class="topic-meta">
                    <div class="meta-item">
                        <i class="fas fa-book"></i>
                        <span>${topic.lessons} Lessons</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-vial"></i>
                        <span>${topic.experiments} Experiments</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${topic.duration}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-chart-bar"></i>
                        <span>${topic.difficulty}</span>
                    </div>
                </div>
                
                <div class="topic-actions">
                    <a href="topic-detail.html?form=${form}&topic=${topic.id}" class="topic-btn btn-primary">
                        <i class="fas fa-play"></i> Start Learning
                    </a>
                    <button class="topic-btn btn-secondary preview-btn" data-form="${form}" data-topic-id="${topic.id}">
                        <i class="fas fa-info-circle"></i> Preview
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to preview buttons
    document.querySelectorAll('.preview-btn').forEach(button => {
        button.addEventListener('click', function() {
            const form = parseInt(this.getAttribute('data-form'));
            const topicId = parseInt(this.getAttribute('data-topic-id'));
            showTopicPreview(form, topicId);
        });
    });
}

// Function to show topic preview
function showTopicPreview(form, topicId) {
    const topic = topicData[form][topicId - 1];
    currentPreviewForm = form;
    currentPreviewTopicId = topicId;
    
    // Update modal content - USING DESCRIPTION AS TITLE
    previewTitle.textContent = topic.description; // This is the key change
    previewForm.textContent = `Form ${form}`;
    previewLessons.textContent = topic.lessons;
    previewExperiments.textContent = topic.experiments;
    previewDuration.textContent = topic.duration;
    previewDifficulty.textContent = topic.difficulty;
    
    // Update the Start Learning link with YouTube video
    startLearningFromPreview.href = `topic-detail.html?form=${form}&topic=${topic.id}`;
    startLearningFromPreview.onclick = function(e) {
    e.preventDefault();
    openYouTubeVideo(topic.youtubeId, topic.youtubeTitle);
    return false;
};

// Alternative: Opens embedded modal
startLearningFromPreview.onclick = function(e) {
    e.preventDefault();
    showYouTubeModal(topic.youtubeId, topic.youtubeTitle);
    return false;
};
    
    // Show the modal
    previewModal.style.display = 'flex';
}

// Function to open YouTube video in new tab/window
function openYouTubeVideo(videoId, videoTitle) {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
    
    // You can also use an embedded modal if you prefer:
    // showYouTubeModal(videoId, videoTitle);
}

// Function to show YouTube video in modal (optional)
function showYouTubeModal(videoId, videoTitle) {
    // Create a YouTube modal if you want embedded videos
    const youtubeModal = document.createElement('div');
    youtubeModal.className = 'youtube-modal';
    youtubeModal.innerHTML = `
        <div class="youtube-modal-content">
            <span class="close-youtube-modal">&times;</span>
            <h3>${videoTitle}</h3>
            <div class="youtube-video-container">
                <iframe width="100%" height="400" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                    title="${videoTitle}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(youtubeModal);
    
    // Style the modal
    youtubeModal.style.cssText = `
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    
    const youtubeModalContent = youtubeModal.querySelector('.youtube-modal-content');
    youtubeModalContent.style.cssText = `
        background: white;
        border-radius: 15px;
        padding: 20px;
        max-width: 800px;
        width: 90%;
        position: relative;
    `;
    
    // Close functionality
    const closeBtn = youtubeModal.querySelector('.close-youtube-modal');
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 30px;
        cursor: pointer;
        color: #333;
    `;
    
    closeBtn.onclick = function() {
        document.body.removeChild(youtubeModal);
    };
    
    youtubeModal.onclick = function(e) {
        if (e.target === youtubeModal) {
            document.body.removeChild(youtubeModal);
        }
    };
}

// Close preview modal when X is clicked
closePreviewModal.addEventListener('click', function () {
    previewModal.style.display = 'none';
});

// Close preview modal when Close button is clicked
closePreviewBtn.addEventListener('click', function () {
    previewModal.style.display = 'none';
});

// Close preview modal when clicking outside
window.addEventListener('click', function (event) {
    if (event.target === previewModal) {
        previewModal.style.display = 'none';
    }
});

// Initialize topic page
function initializeTopicPage() {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop();
    
    // Remove active class from all buttons first
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Highlight current page
    if (currentPage === 'topic.html') {
        document.querySelector('.topic-btn').classList.add('active');
    }

    // Add event listeners to form options
    document.querySelectorAll('.form-option').forEach(option => {
        option.addEventListener('click', function() {
            const form = parseInt(this.getAttribute('data-form'));
            selectForm(form);
        });
    });

    // Load initial topics for Form 4
    selectForm(4);
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTopicPage);
} else {
    initializeTopicPage();
}