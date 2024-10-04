document.addEventListener("DOMContentLoaded", function() {
    const registerButton = document.getElementById("register");
    const loginButton = document.getElementById("login");
    const container = document.getElementById("container");
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    // Toggle between login and registration panels
    registerButton.addEventListener("click", (event) => {
        event.preventDefault();
        container.classList.add("right-panel-active");
        registerForm.scrollIntoView({ behavior: "smooth" });
    });

    loginButton.addEventListener("click", (event) => {
        event.preventDefault();
        container.classList.remove("right-panel-active");
        loginForm.scrollIntoView({ behavior: "smooth" });
    });

    // Registration form submission with validation
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (validateRegisterForm()) {
            // Simulate registration success
            document.getElementById("registerMessage").style.display = "block";
            container.classList.remove("right-panel-active");
            loginForm.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Login form submission with validation
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (validateLoginForm()) {
            // Simulate login success (replace with actual logic)
            alert("Login successful!"); // Placeholder for actual login logic
        }
    });
});

// Toggle password visibility
function togglePasswordVisibility(buttonId, inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(buttonId);
    const icon = document.getElementById(iconId);

    toggleButton.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        icon.classList.toggle('fa-eye-slash');
        icon.classList.toggle('fa-eye');
    });
}

// Initialize password toggle functionality for login and register
togglePasswordVisibility('toggleLoginPassword', 'loginPassword', 'loginIcon');
togglePasswordVisibility('toggleRegisterPassword', 'registerPassword', 'registerIcon');

// Validate register form
function validateRegisterForm() {
    const registerEmail = document.getElementById("registerEmail").value;
    const registerPassword = document.getElementById("registerPassword").value;

    if (!registerEmail || !registerPassword) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Email format validation (basic regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(registerEmail)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password strength validation (basic)
    if (registerPassword.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    return true;
}

// Validate login form
function validateLoginForm() {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (!loginEmail || !loginPassword) {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
}
