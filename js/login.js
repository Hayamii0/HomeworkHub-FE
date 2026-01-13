// login.js - Login Page Specific JavaScript

// ============================================
// CONFIGURATION SECTION
// ============================================
const LOGIN_CONFIG = {
    FIXED_EMAIL: "ali@gmail.com",      // Change this email
    FIXED_PASSWORD: "123",             // Change this password
    REDIRECT_PAGE: "index.html",       // Changed from home.html to index.html
    REMEMBER_ME_KEY: "rememberedEmail",
    LOGIN_STATUS_KEY: "isLoggedIn",
    USER_EMAIL_KEY: "userEmail"
};
// ============================================

// DOM Elements
const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const toggleBg = document.querySelector('.toggle-bg');
const goToRegisterFromLogin = document.getElementById('go-to-register-from-login');
const goToLoginFromRegister = document.getElementById('go-to-login-from-register');

// Function to switch to login form
function showLoginForm() {
    loginToggle.classList.add('active');
    registerToggle.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    toggleBg.classList.remove('register');
}

// Function to switch to register form
function showRegisterForm() {
    registerToggle.classList.add('active');
    loginToggle.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    toggleBg.classList.add('register');
}

// Add shake animation to element
function shakeElement(element) {
    element.classList.add('input-error');
    setTimeout(() => {
        element.classList.remove('input-error');
    }, 500);
}

// Show loading state on button
function showButtonLoading(button) {
    const originalText = button.innerHTML;
    button.classList.add('btn-loading');
    button.disabled = true;
    return originalText;
}

// Hide loading state on button
function hideButtonLoading(button, originalText) {
    button.classList.remove('btn-loading');
    button.disabled = false;
    button.innerHTML = originalText;
}

// Login form submission
function handleLoginSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    const submitBtn = this.querySelector('.btn'); // Changed from .login-btn to .btn

    // Validate fields
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Show loading state
    const originalText = showButtonLoading(submitBtn);

    // Check against fixed credentials
    if (email === LOGIN_CONFIG.FIXED_EMAIL && password === LOGIN_CONFIG.FIXED_PASSWORD) {
        // Store remember me preference
        if (rememberMe) {
            localStorage.setItem(LOGIN_CONFIG.REMEMBER_ME_KEY, email);
        } else {
            localStorage.removeItem(LOGIN_CONFIG.REMEMBER_ME_KEY);
        }

        // Store login status
        sessionStorage.setItem(LOGIN_CONFIG.LOGIN_STATUS_KEY, 'true');
        sessionStorage.setItem(LOGIN_CONFIG.USER_EMAIL_KEY, email);

        // Simulate API call delay
        setTimeout(() => {
            window.location.href = LOGIN_CONFIG.REDIRECT_PAGE;
        }, 1000);
        
    } else {
        // Hide loading state
        hideButtonLoading(submitBtn, originalText);
        
        // Show error
        alert('Invalid email or password. Please try again.');
        
        // Highlight wrong fields
        if (email !== LOGIN_CONFIG.FIXED_EMAIL) {
            shakeElement(document.getElementById('login-email'));
        }
        if (password !== LOGIN_CONFIG.FIXED_PASSWORD) {
            shakeElement(document.getElementById('login-password'));
        }
    }
}

// Register form submission
function handleRegisterSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const terms = document.getElementById('terms').checked;
    const submitBtn = this.querySelector('.btn'); // Changed from .login-btn to .btn

    // Validate fields
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        shakeElement(document.getElementById('register-confirm-password'));
        return;
    }

    if (!terms) {
        alert('You must agree to the Terms & Conditions');
        return;
    }

    // Check if trying to register with fixed credentials
    if (email === LOGIN_CONFIG.FIXED_EMAIL) {
        alert('This email is already registered. Please use the login form.');
        showLoginForm();
        return;
    }

    // Show loading state
    const originalText = showButtonLoading(submitBtn);

    // Simulate API call for registration
    setTimeout(() => {
        hideButtonLoading(submitBtn, originalText);
        
        // Success message
        alert(`Account created successfully!\n\nWelcome ${name}!\n\nYou can now login with your credentials.`);
        
        // Reset form and switch to login
        registerForm.reset();
        showLoginForm();
        
        // Auto-fill the email in login form
        document.getElementById('login-email').value = email;
    }, 1500);
}

// Handle social login
function handleSocialLogin(platform) {
    alert(`Sign in with ${platform} - This would redirect to ${platform} authentication in a real application.`);
}

// Handle forgot password
function handleForgotPassword() {
    const email = prompt('Please enter your email to reset password:');
    if (email) {
        if (email === LOGIN_CONFIG.FIXED_EMAIL) {
            alert(`Password reset link sent to ${email}\nDemo password is: ${LOGIN_CONFIG.FIXED_PASSWORD}`);
        } else {
            alert(`Password reset link sent to ${email}\n(Simulated - in a real app, this would send an email)`);
        }
    }
}

// Show terms and conditions
function showTermsAndConditions() {
    const termsText = `
    Terms & Conditions:

    1. You agree to use this service responsibly and only for educational purposes.
    2. Your data will be protected according to our privacy policy.
    3. You must be at least 13 years old to use this service.
    4. All content provided is for educational purposes only.
    5. You are responsible for maintaining the confidentiality of your account.
    
    Privacy Policy:
    - We do not sell your personal information.
    - We use cookies to improve your experience.
    - You can request data deletion at any time.
    `;
    
    alert(termsText);
}

// Check for remembered email on page load
function checkRememberedEmail() {
    const rememberedEmail = localStorage.getItem(LOGIN_CONFIG.REMEMBER_ME_KEY);
    if (rememberedEmail && rememberedEmail === LOGIN_CONFIG.FIXED_EMAIL) {
        document.getElementById('login-email').value = rememberedEmail;
        document.getElementById('remember-me').checked = true;
    }
}

// Initialize login page
function initializeLoginPage() {
    // Set up event listeners for toggle buttons
    loginToggle.addEventListener('click', showLoginForm);
    registerToggle.addEventListener('click', showRegisterForm);

    // Set up event listeners for form footer links
    goToRegisterFromLogin.addEventListener('click', function (e) {
        e.preventDefault();
        showRegisterForm();
    });

    goToLoginFromRegister.addEventListener('click', function (e) {
        e.preventDefault();
        showLoginForm();
    });

    // Set up form submissions
    loginForm.addEventListener('submit', handleLoginSubmit);
    registerForm.addEventListener('submit', handleRegisterSubmit);

    // Set up social buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const platform = this.classList.contains('facebook') ? 'Facebook' :
                this.classList.contains('twitter') ? 'Twitter' : 'Google';
            handleSocialLogin(platform);
        });
    });

    // Set up forgot password link
    document.querySelector('.forgot-password').addEventListener('click', function (e) {
        e.preventDefault();
        handleForgotPassword();
    });

    // Set up terms and conditions link
    const termsLink = document.querySelector('a[href="#"]');
    if (termsLink && termsLink.textContent === 'Terms & Conditions') {
        termsLink.addEventListener('click', function (e) {
            e.preventDefault();
            showTermsAndConditions();
        });
    }

    // Check for remembered email
    checkRememberedEmail();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLoginPage);
} else {
    initializeLoginPage();
}