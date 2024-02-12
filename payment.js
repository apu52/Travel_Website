// Function to check if all form fields are filled
function checkFormValidity() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
        }
    });

    return isValid;
}

// Add event listener to the form submit event
const form = document.querySelector('form');
const checkoutButton = document.querySelector('.btn-primary');

form.addEventListener('submit', function (event) {
    if (!checkFormValidity()) {
        event.preventDefault(); // Prevent form submission if fields are not filled
        alert('Please fill out all required fields.'); // Display alert message
    }
});

const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

// Regular expression to validate alphabet characters only
const alphabetRegex = /^[A-Za-z]+$/;

firstNameInput.addEventListener('blur', function () {
    const value = this.value.trim();
    if (!alphabetRegex.test(value)) {
        this.setCustomValidity('Please enter a valid first name using only alphabet characters.');
        this.classList.add('is-invalid');
    } else {
        this.setCustomValidity('');
        this.classList.remove('is-invalid');
    }
});

lastNameInput.addEventListener('blur', function () {
    const value = this.value.trim();
    if (!alphabetRegex.test(value)) {
        this.setCustomValidity('Please enter a valid last name using only alphabet characters.');
        this.classList.add('is-invalid');
    } else {
        this.setCustomValidity('');
        this.classList.remove('is-invalid');
    }
});

const usernameInput = document.getElementById('username');

// Regular expression to validate username (letters and digits only)
const usernameRegex = /^[a-zA-Z0-9]+$/;

usernameInput.addEventListener('blur', function () {
    const value = this.value.trim();
    if (!usernameRegex.test(value)) {
        this.setCustomValidity('Your username should only contain letters and digits.');
        this.classList.add('is-invalid');
    } else {
        this.setCustomValidity('');
        this.classList.remove('is-invalid');
    }
});

// Add event listener to the form input event
form.addEventListener('input', function () {
    if (checkFormValidity()) {
        checkoutButton.removeAttribute('disabled');
    } else {
        checkoutButton.setAttribute('disabled', 'true');
    }
});

// Disable/enable the checkout button based on form validity
form.addEventListener('input', function () {
    if (checkFormValidity()) {
        checkoutButton.removeAttribute('disabled');
    } else {
        checkoutButton.setAttribute('disabled', 'true');
    }
});

// Add event listener to the Zipcode input for validation
const zipInput = document.getElementById('zip');

zipInput.addEventListener('blur', function () {
    const value = this.value.trim();
    const isValidZip = /^\d{1,6}$/.test(value); // Check if value contains only digits and is up to 6 digits long
    if (!isValidZip) {
        this.setCustomValidity('Please enter a valid Zipcode.'); // Set custom validation message
        this.classList.add('is-invalid'); // Add Bootstrap invalid class
    } else {
        this.setCustomValidity(''); // Clear custom validation message if valid
        this.classList.remove('is-invalid'); // Remove Bootstrap invalid class
    }
});


// Add event listener to the email input for validation
const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', function () {
    const email = this.value.trim(); // Trim whitespace from the input
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Use regular expression to validate email format

    if (!isValidEmail) {
        this.classList.add('is-invalid'); // Add 'is-invalid' class to input for visual feedback
        this.nextElementSibling.style.display = 'block'; // Show the invalid feedback message
    } else {
        this.classList.remove('is-invalid'); // Remove 'is-invalid' class
        this.nextElementSibling.style.display = 'none'; // Hide the invalid feedback message
    }
});

const addressInput = document.getElementById('address');

addressInput.addEventListener('blur', validateAddress);

function validateAddress() {
    const input = this;
    const value = input.value.trim();
    const isValid = value !== '';

    if (!isValid) {
        input.setCustomValidity('Please enter your shipping address.');
        input.classList.add('is-invalid');
    } else {
        input.setCustomValidity('Please enter your shipping address.');
        input.classList.remove('is-invalid');
    }
}